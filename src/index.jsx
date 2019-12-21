import {TextView,Action,Button,CollectedViews, NavigationView, Page, contentView, Stack, Action, app} from 'tabris';
import {NewsPage} from './pages/NewsPage';
import {MyDashboard} from './pages/MyDashboard';
import {About} from './pages/About';
import {RandomPL} from './random';

contentView.append(
  <NavigationView stretch>
    <Action onSelect={() => exit()} placement='overflow' title='Settings'/>
    <Action onSelect={() => exit()} placement='overflow' title='Exit'/>
    <Page title='Bisness'>
      <Stack stretch>
        <Button centerX top={100} onSelect={() => openDashboardPage()} padding={25} font="18px" width={200}>Open My Dashboard</Button>
        <Button centerX onSelect={() => openNewsPage()} padding={25} font="18px"  width={200}>News</Button>
        <Button centerX onSelect={() => openRPLPage()} padding={25} font="18px" width={200}>Random LP</Button>
        <Button centerX onSelect={() => openAbout()} padding={25} font="18px" width={200}>About</Button>
      </Stack>
    </Page>
  </NavigationView>
)
function openNewsPage() {
 $(NavigationView).only().append(
  <NewsPage/>
 );
}

function openAbout(){
  $(NavigationView).only().append(
  <About/>
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
   app.close()
 }