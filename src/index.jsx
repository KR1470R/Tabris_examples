import {TextView,Action,Button,CollectedViews, NavigationView, Page, contentView, Stack, Action, app} from 'tabris';
import {NewsPage} from './pages/NewsPage';
import {MyDashboard} from './pages/MyDashboard';
import {AboutPage} from './pages/About';
import {RandomPL} from './random';

contentView.append(
  <NavigationView stretch>
    <Action onSelect={() => exit()} placement='overflow' title='Settings'/>
    <Action onSelect={() => exit()} placement='overflow' title='Exit'/>
    <Page title='Buisness & Finance'>
      <Stack stretch>
        <Button centerX top={100} onSelect={() => openDashboardPage()} padding={25} font="18px" width={250}>My Dashboard</Button>
        <Button centerX onSelect={() => openNewsPage()} padding={25} font="18px"  width={250}>News</Button>
        <Button centerX onSelect={() => openRPLPage()} padding={25} font="18px" width={250}>Random LP</Button>
        <Button centerX onSelect={() => openAboutPage()} padding={25} font='18px' width={250}>About</Button>
      </Stack>
    </Page>
  </NavigationView>
)
function openNewsPage() {
 $(NavigationView).only().append(
  <NewsPage/>
 );
}

function openAboutPage() {
  $(NavigationView).only().append(
    <AboutPage/>
  );
}

function openDashboardPage() {
  $(NavigationView).only().append(
   <MyDashboard />
  );
 }
 
 function openRPLPage() {
  $(NavigationView).only().append(
    <RandomPL />
  )
 }

 function exit() {
   app.close();
 }