from PIL import (
    Image,
    ImageDraw,
    ImageFont
)
import base64
import io
import jinja2
import os
import readtime

# Initialize text and font
txt = """Which range of HTTP status codes describes an error with the client?"""
font = ImageFont.truetype(font='fonts/coolvetica rg.ttf', size=30)

# Determine size of text
img = Image.new('RGB', (0, 0), (255, 255, 255))
d = ImageDraw.Draw(img)
text_width, text_height = d.textsize(txt, font=font)

# Generate image
img = Image.new('RGB', (text_width, text_height + 10), (255, 255, 255))
d = ImageDraw.Draw(img)
d.text((0, 0), txt, fill=(255, 0, 0), font=font)

# Save image to memory
img_buffer = io.BytesIO()
img.save(img_buffer, 'png')
img_buffer.seek(0)
in_memory_file = img_buffer.getvalue()

# Load jinja template
templateLoader = jinja2.FileSystemLoader(searchpath="./")
templateEnv = jinja2.Environment(loader=templateLoader)
template = templateEnv.get_template('dynamic_image.jinja2')

# Determine read time, in seconds
result = readtime.of_text(txt)

# Populate template and generate html file
outputText = template.render(img_64=base64.b64encode(in_memory_file).decode('ascii'), img_alt=txt, time=result.seconds)
filename = 'generated/dynamic_image.html'
if not os.path.exists(os.path.dirname(filename)):
    os.makedirs(os.path.dirname(filename))
with open(filename, 'w') as f:
    f.write(outputText)
