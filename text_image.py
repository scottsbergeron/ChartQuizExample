from PIL import (
    Image,
    ImageDraw,
    ImageFont
)
import os

# Initialize text and font
txt = """This is a long question.
It goes over multiple lines."""
# font = ImageFont.load_default()
font = ImageFont.truetype(font='fonts/coolvetica rg.ttf', size=30)
# text_width, text_height = font.getsize(txt)  DOESN'T WORK WITH MULTILINE TEXT

# Determine size of text
img = Image.new('RGB', (0, 0), (255, 255, 255))
d = ImageDraw.Draw(img)
text_width, text_height = d.textsize(txt, font=font)

# Generate image
img = Image.new('RGB', (text_width, text_height + 10), (255, 255, 255))
d = ImageDraw.Draw(img)
d.text((0, 0), txt, fill=(255, 0, 0), font=font)

# Save image to disk
filename = 'generated/example.png'
if not os.path.exists(os.path.dirname(filename)):
    os.makedirs(os.path.dirname(filename))
img.save(filename)

# IN MEMORY
# import io
# s = io.BytesIO()
# img.save(s, 'png')
# in_memory_file = s.getvalue()
