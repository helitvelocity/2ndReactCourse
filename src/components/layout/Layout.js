import classes from "./Layout.module.css";
import MainNavigator from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigator></MainNavigator>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
