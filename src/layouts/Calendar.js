import Page from '../components/Page';
import { StyledContainer } from '../components/Auth';

export default function CalendarLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="80%" height="90%">
        {children}
      </StyledContainer>
    </Page>
  );
}
