import { Oval } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        height={150}
        width={150}
        color="#116466"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#d1e8e2"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      ;
    </StyledLoader>
  );
};

export default Loader;
