import styled from 'styled-components/native';

export const ContainerLogin = styled.View `
    flex: 1;
    backgroundColor: #DDD;
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
    height: 30;
    marginRight: 20;
    aspectRatio: 1;
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

export const ContainerErrorText = styled.View `
    alignSelf: center;
    color: #FFF;
    fontSize: 18;
    fontWeight: bold;
`;


