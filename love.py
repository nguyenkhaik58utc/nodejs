import sys
import io
import os
import time
import random

try:
    if getattr(sys.stdout, "reconfigure", None):
        sys.stdout.reconfigure(encoding="utf-8")
    else:
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
except Exception:
    pass

try:
    import colorama

    colorama.init()
except Exception:
    pass

RESET = "\033[0m"
PAINT = "\033[2m"
CYAN = "\033[36m"
WHITE = "\033[37m"
YELLOW = "\033[33m"
GRAY = "\033[90m"
RED = "\033[31m"

lyrics = [
    (f"{WHITE}Nguyện làm vầng trăng soi sáng đường{RESET}", 3.2, 0.09),
    (f"{WHITE}Nguyện làm màn đêm yên giấc em{RESET}", 3.5 , 0.11),
    (f"{WHITE}Khi những trưa nắng hè, anh làm bóng mát cho em.{RESET}", 6.5, 0.1),
    (f"{WHITE}Nguyện làm giường êm em muốn nằm{RESET}", 4 , 0.12),
    (f"{WHITE}Nguyện làm chăn ấm những đêm đông{RESET}", 4, 0.085),
    (f"{WHITE}Nguyện làm gối êm thu về em tựa vào lòng anh{RESET}", 8, 0.13),
    (f"{WHITE}Nguyện làm hàng cây dưới đường{RESET}", 4, 0.1),
    (f"{WHITE}Nghiêng dài để anh che nắng em{RESET}", 3.5, 0.11),
    (f"{WHITE}Anh sẽ luôn bên cạnh, cả đời che chở em{RESET}", 6, 0.13),
    (f"{WHITE}Nguyện làm vì sao em ngước nhìn{RESET}", 4, 0.12),
    (f"{WHITE}Nghe chuyện thì thầm em mỗi đêm{RESET}", 3 , 0.09),
    (f"{WHITE}Nguyện làm gió xuân trong lành{RESET}", 3, 0.08),
    (f"{WHITE}Luôn quanh quẩn bên em{RESET}", 3, 0.1),
    (f"{RED}Nguyện làm gió xuân trong lành{RESET}", 4, 0.1),
    (f"{RED}Luôn quanh quẩn{RESET}", 3, 0.2),
    (f"{RED}bên EM{RESET}", 11, 0.3)
]


def karaoke(lyrics_list):
    for i, (text, pause, delay) in enumerate(lyrics_list):
        for ch in text:
            sys.stdout.write(ch)
            sys.stdout.flush()
            time.sleep(delay)
        if i < len(lyrics) - 1:
            sys.stdout.write("\n")
        time.sleep(0.08)

if __name__ == "__main__":
    
    time.sleep(1)        
    time.sleep(1)
    print("start")
    time.sleep(1)
    karaoke(lyrics)
