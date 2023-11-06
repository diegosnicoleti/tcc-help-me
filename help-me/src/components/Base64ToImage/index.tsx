export function Base64ToImage({ base64String, height, width }:any){
  if (!base64String || typeof base64String !== 'string') {
    return null;
  }

  return (
    <div className="rounded-full overflow-hidden">
      <img 
        src={base64String}
        alt="Imagem de perfil do psicólogo selecionado"
        height={height || 200}
        width={width || 200}
      />
    </div>
  );
}