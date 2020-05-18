import React from 'react';
import styled from 'styled-components';
import { Divider, Voucher, Bold } from './styles';
import Logo from '../../components/Logos/image/LogoTextDown.png';
import {
  useVoucherState,
  useVoucherDispatch,
} from '../../utilities/hooks/VoucherContext/context';
import { SET_VIEW } from '../../utilities/hooks/VoucherContext/constants';

interface Props {}
interface ButtonProps {
  color?: String;
}

const LandingCard = (props: Props) => {
  const { voucher } = useVoucherState();
  const dispatch = useVoucherDispatch();

  const setView = (e) => {
    dispatch({ type: SET_VIEW, payload: 1 });
  };

  return (
    <Container>
      <CardContainer>
        <SubText>
          Your available balance
          <span>?</span>
        </SubText>
        <Balance>${(voucher.amount / 100).toFixed(2)}</Balance>
        <Voucher>
          Voucher Code: <Bold>{voucher.seller_gift_card_id}</Bold>
        </Voucher>
        <Divider />
        <Button onClick={setView}>Click to begin redeeming your voucher</Button>
      </CardContainer>
      <br />
      <Button color="#ab192e">{voucher.locations[0]}</Button>;
      <FooterContainer>
        <Image src={Logo} />
      </FooterContainer>
    </Container>
  );
};

export default LandingCard;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const CardContainer = styled.div`
  width: 90%;
  max-width: 320px;
  margin: 0 auto;
  min-height: 350px;
  background-color: #ab192e;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
const SubText = styled.div`
  width: 90%;
  margin: 12px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    justify-self: flex-end;
    margin: 12px;
  }
`;
const Button = styled(SubText)`
  cursor: pointer;
  ${(props: ButtonProps) => props.color && `color: ${props.color}`}
`;
const Balance = styled.h1`
  font-weight: 700;
  font-size: 50px;
  margin: 24px auto;
`;
const Image = styled.img`
  width: 75px;
`;
const FooterContainer = styled.div`
  width: 100%;
  margin: 12px auto;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
