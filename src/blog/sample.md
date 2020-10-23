---
title: "Sample of a very long title that at some point will wrap "
date: "2020-06-10"
spoiler: "An essay about laying. Sample"
---

My thoughts about this book. Sure!

This posts details how to create an OCR parser with the goal
of converting `png` and `pdf` files to text.

```python{1,4-6}:title=test.py
import pdf2image as p2i
import pytesseract as pt
import configparser
import argparse
import os

from configparser import NoOptionError
from PIL import Image

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='ANY to TXT using Tesseract-OCR.')
    parser.add_argument('--config',
                        type=str,
                        help='Config Filename. If left empty setup.ini is used by default.',
                        default='setup.ini')

    args = parser.parse_args()

    config_file = args.config

    config = configparser.ConfigParser()
    config.read(config_file)

    try:
        document_name = config.get('DEFAULT', 'document_name')
        output_filename = config.get('DEFAULT', 'output_filename')
    except NoOptionError as error:
        raise Exception(f'Error: {error}')

    content = ''
    if '.pdf' == os.path.splitext(output_filename)[1].lower():
        pages = p2i.convert_from_path(pdf_path=f'input/{document_name}', dpi=200, size=(1654, 2340))
        for i in range(len(pages)): pages[i].save(f"tmp/{os.path.splitext(document_name)[0]}_{str(i)}.png")
        content = [pt.image_to_string(txt_image) for txt_image in pages]
    elif os.path.splitext(output_filename)[1].lower() in ['.png', '.jpg', '.jpeg']:
        content = pt.image_to_string(Image.open(f'input/{document_name}'))
    else:
        raise Exception(f'{os.path.splitext(output_filename)[1].lower()} files are not yer supported, please contact the developer to check this out.')

    # Tesseract Detected text
    try:
        with open(f'output/{os.path.splitext(output_filename)[0]}.txt', 'w') as writer:
            writer.writelines(content)
    except:
        raise Exception('Error writing output file. Please check the output directory \
            exists and your permissions to write in it.')
```
