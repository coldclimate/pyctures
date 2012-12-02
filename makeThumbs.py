import glob
import os
from PIL import Image

os.chdir("./imgs/source/")
for file in glob.glob("*.png"):
    img = Image.open(file)
    theFileName, fileExtension = os.path.splitext(file)
    img.thumbnail((200, 200), Image.ANTIALIAS)
    img.save("./img/thumbs/" + theFileName + "_thumbnail" + fileExtension, "PNG")
