import styled
    //  { css } 
     from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;    
`;

// for components rather than html elements,
//  we pass the component like a function argument
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// className 'option' is given to both div and Link
// so we create a variable using {css} from styled-components
// then insert it into into our new styled.div and styled(Link)
// using sting interpolation

// normally this would sit at top of page
// const OptionContainerStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
// `;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;

// export const OptionLink = styled(Link)`
//     ${OptionContainerStyles}
// `;

// Alternatively, we can just insert the OptionLink (for example) but
// add as='div' inline and that will use the same styles as OptionLink but make it a div
// therefore less code
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;