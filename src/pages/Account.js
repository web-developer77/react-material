import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import AccountProfile from 'src/components/account/AccountProfile';
// import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import Test1 from 'src/components/account/Test1';
import Test2 from 'src/components/account/Test2';

const Account = () => (
  <>
    <Helmet>
      <title>Material UI Project</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <Test1 />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <Test2 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
