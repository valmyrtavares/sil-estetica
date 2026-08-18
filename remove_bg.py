from PIL import Image
import math

def remove_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    # Let's assume the corners are background
    bg_colors = [pixels[0,0], pixels[width-1,0], pixels[0,height-1], pixels[width-1,height-1]]
    # Get average background color
    avg_r = sum([c[0] for c in bg_colors]) // 4
    avg_g = sum([c[1] for c in bg_colors]) // 4
    avg_b = sum([c[2] for c in bg_colors]) // 4
    bg_color = (avg_r, avg_g, avg_b, 255)
    
    tolerance = 50
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            dist = math.sqrt((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2)
            
            if dist < tolerance:
                # Fully transparent for exact match, semi-transparent for edges
                # using a smoothstep-like function
                alpha = int((dist / tolerance) * 255)
                # We want to blend to white instead of leaving dark fringes.
                # So we push the RGB towards white as alpha goes down
                mix = alpha / 255.0
                new_r = int(r * mix + 255 * (1 - mix))
                new_g = int(g * mix + 255 * (1 - mix))
                new_b = int(b * mix + 255 * (1 - mix))
                pixels[x, y] = (new_r, new_g, new_b, alpha)

    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_bg("c:/Codigo/SilEstéticaSite/public/image/Logo.jpeg", "c:/Codigo/SilEstéticaSite/public/image/Logo_transparent.png")
