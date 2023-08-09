type Photo = {
    titulo: string;
    src: string;
  };
  
export type Product = {
    descricao: string;
    fotos: Photo[];
    id: string;
    nome: string;
    preco: string;
    usuario_id: string;
    vendido: string;
  };