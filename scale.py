# -*- coding: utf-8 -*-
import sys
from PIL import Image


def rgb888_to_rgb565(r, g, b):
    """将8位RGB转为16位RGB565"""
    return ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3)


def image_to_rgb565_array(image_path):
    img = Image.open(image_path)
    a, b = img.size
    img = img.resize((a, b), Image.NEAREST)
    img = img.convert('RGB')
    pixels = list(img.getdata())
    rgb565_array = [f"0x{rgb888_to_rgb565(r, g, b):04x}" for (r, g, b) in pixels]
    return a, b, rgb565_array


# 示例用法
if __name__ == "__main__":
    a, b, arr = image_to_rgb565_array(sys.argv[1])
    print(f"{a}, {b}")
    for i in range(b):
        line = arr[i * a : (i + 1) * a]
        print(', '.join(line))
