import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

export const ContainerApp = styled.View `
    flex: 1;
    backgroundColor: #DDD;
    paddingTop: ${props => props.nothing ? '10px' : 0 };
    paddingBottom: ${props => props.nothing ? '10px' : 0 };
    paddingLeft: ${props => props.nothing ? 10 : 0 };
    paddingRight: ${props => props.nothing ? 10 : 0 };
    

`;

export const CardLogin = styled.View `
    marginTop: 80;
`;

export const InputLogin = styled.TextInput `
    paddingBottom: 5;
    paddingRight: 5;
    paddingTop: 5;
    paddingLeft: 15;
    color: #FFF;
    borderBottomWidth: 1;
    borderBottomColor: #5B4500;
`;

export const ImageHeader = styled.Image `
    width: 30;
    height: ${props => props.logout ? 24 : 30 };
    marginRight: 20;
    marginTop:  ${props => props.logout ? '10px' : 0 };
    aspectRatio: 1;
`;
export const TextLogoutHeader = styled.Text `
    fontSize: 8;
    fontWeight: bold;
    alignSelf: center;
    paddingRight: 20;
    marginTop: 3; 
    color: #FFF; 
`;

export const ContainerLoading = styled.View `
    height: ${ Dimensions.get('window').height - 100 };
    justifyContent: center;
    alignItems: center;
`;

export const ContainerLoadingNothing = styled.View `
    paddingTop: 10;
    paddingBottom: 10;
    paddingLeft: 10;
    paddingRight: 10;
`;

export const ImageNothing = styled.Image `
    alignSelf: center;
    marginTop: 30;
    width: 200;
    height: 186;
`;

export const TextNothing = styled.Text `
    paddingTop: 20;
    fontSize: 20;
    color: #d6a200;
    fontWeight: bold;
    alignSelf: center;
`;

export const ImageBackground = styled.Image `
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    justifyContent: center;   
`;

export const TextFooterLogin = styled.Text `
    fontSize: 16;
    fontWeight: bold;
    color: #D6A200;
    alignSelf: center;
`;

export const LoadingButton = styled.ActivityIndicator `
    backgroundColor: #D6A200;
    borderWidth: 1;
    borderColor: #5B4500;
    marginHorizontal: 50;
    marginTop: 10;
    paddingTop: 10;
    paddingBottom: 10;
    paddingLeft: 10;
    paddingRight: 10;
    borderRadius: 5;
`;

export const ButtonLogin = styled.TouchableOpacity `
    backgroundColor: #D6A200;
    borderWidth: 1;
    borderColor: #5B4500;
    marginHorizontal: 50;
    marginTop: 10;
    paddingTop: 10;
    paddingBottom: 10;
    paddingLeft: 10;
    paddingRight: 10;
    borderRadius: 5;
`;

export const ButtonLoginText = styled.Text `
    color: #FFF;
    fontWeight: bold;
    fontSize: 18;
    alignSelf: center;
`;

export const ContainerError = styled.View `marginVertical: 5;`;

export const ErrorText = styled.Text `
    alignSelf: center;
    color: #FFF;
    fontSize: 18;
    fontWeight: bold;
`;


