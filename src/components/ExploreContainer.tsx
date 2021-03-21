import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Conheça <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5521981331302&text=Boa%20tarde%2C%20Gostaria%20de%20fazer%20um%20Or%C3%A7amento%20de%20um%20de%20seus%20servi%C3%A7os.">Entre em Contato</a></p>
    </div>
  );
};

export default ExploreContainer;
