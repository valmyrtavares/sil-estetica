from PIL import Image

def crop_logo(input_path, output_path):
    img = Image.open(input_path)
    width, height = img.size
    
    # A imagem tem o texto pequeno na parte inferior.
    # Vamos cortar a base (cerca de 35% de baixo para cima).
    # Ajuste manual estimado.
    crop_h = int(height * 0.65)
    
    cropped = img.crop((0, 0, width, crop_h))
    cropped.save(output_path)

if __name__ == "__main__":
    crop_logo("c:/Codigo/SilEstéticaSite/public/image/Logo_transparent.png", "c:/Codigo/SilEstéticaSite/public/image/Logo_cropped.png")
