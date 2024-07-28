import Header from '@/components/Header/Header';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="page">
        <Header />
        <main>
          <RegistrationForm />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
