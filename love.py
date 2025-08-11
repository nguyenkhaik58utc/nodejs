# -*- coding: utf-8 -*-
import sys
import io
import os
import time
import random

# --- ??m b?o stdout d?ng UTF-8 ---
try:
    # Python 3.7+ c? reconfigure
    if getattr(sys.stdout, "reconfigure", None):
        sys.stdout.reconfigure(encoding="utf-8")
    else:
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
except Exception:
    pass

# Tr?n Windows, colorama gi?p ANSI escape sequences ho?t ??ng t?t
try:
    import colorama
    colorama.init()
except Exception:
    # n?u ch?a c?i colorama th? v?n ch?y (m?u c? th? kh?ng ho?t ??ng tr?n cmd c?)
    pass

# M?ng m?u ANSI (s? d?ng escape code; colorama s? convert tr?n Windows)
COLORS = [
    "\033[91m",  # red
    "\033[92m",  # green
    "\033[93m",  # yellow
    "\033[94m",  # blue
    "\033[95m",  # magenta
    "\033[96m",  # cyan
]
RESET = "\033[0m"

# Test nhanh encoding hi?n t?i (b? comment n?u c?n debug)
# print("stdout encoding:", sys.stdout.encoding)

# lyrics: list of (text, pause_after_seconds)
lyrics = [
    ("Em mu?n l?m quen anh ngay b?y gi?", 1.2),
    ("Tim em rung l?n nh? tr?ng nh?p ch?", 0.8),
    ("Anh nh?n em c??i, ?nh m?t m?ng m?", 1.0),
    ("N?u anh ??ng ?, m?nh h?n h? nh?", 1.5),
]

def karaoke(lyrics_list, min_char_delay=0.02, max_char_delay=0.08):
    for text, pause in lyrics_list:
        # hi?n th? t?ng k? t?; m?u c? th? thay ??i t?ng ch?
        for ch in text:
            color = random.choice(COLORS)
            # in k? t? k?m m? m?u
            sys.stdout.write(f"{color}{ch}{RESET}")
            sys.stdout.flush()
            time.sleep(random.uniform(min_char_delay, max_char_delay))
        print()  # xu?ng d?ng sau 1 c?u
        time.sleep(pause)

if __name__ == "__main__":
    karaoke(lyrics)
