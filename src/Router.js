import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import { ContextLayout } from "./utility/context/Layout";
import { AuthComponent } from "AuthComponent";
import TestLayOut from "test_layout/categories/CategoriesPage";
import Page from "views/pages/dashboardPage/Page";
import AddPage from "views/pages/dashboardPage/add/AddPage";

// const Website = lazy(()=>import('views/pages/website_statics/Website'))

// const DelevaryFee = lazy(()=>import('views/pages/deliveryFee/DeliveryFeePage'))

const Contact = lazy(()=>import('views/pages/contact_us/Contact'))
const StaticInfoPage = lazy(()=>import('views/pages/StaticInfo/StaticInfoPage'))
// const services = lazy(() =>import('views/pages/services/'))
const FirstAndSecondService = lazy(() =>import('views/pages/services/first & second/FirstAndSecondPage'))
const ThirdSevice = lazy(() =>import('views/pages/services/third/ThirdPage'))
const FifthService  = lazy(() =>import('views/pages/services/fifth/FifthPage'))
const FourthSevice = lazy(() =>import('views/pages/services/fourth/FourthPage'))
const SixthSerivce = lazy(() =>import('views/pages/services/sixth/SixthPage'))

const OurWorks = lazy(() => import('views/pages/ourworks/OurWorksPage'))

const ProductPage = lazy(()=>import('views/pages/product/ProductPage')) 
const UpdateProductPage = lazy(()=>import('views/pages/product/UpdateProductPage'))
const AddProductPage = lazy(()=>import('views/pages/product/AddProductPage'))
// const AddRolePage = lazy(()=>import('views/pages/Role/AddRolePage'))
// const EditAccount = lazy(() =>import("views/pages/accounts/edit/EditAccount"));
// const AddAccount = lazy(() =>import("views/pages/accounts/add/AddAdmin"));
// const RolePage = lazy(() =>import("views/pages/Role/RolePage"));
// const ViewAccounts = lazy(() =>import("./views/pages/accounts/view/ViewPannel"));


// const HomePage = lazy(() => import("./views/pages/home/HomePage"));
const CategoriesPage = lazy(() => import("./views/pages/categories/CategoriesPage"));
// const SubCategoriesPage = lazy(() => import("views/pages/SubCategory/SubCategoriesPage"));
// const SubSubCategoriesPage = lazy(() => import("views/pages/SubSubCategory/SubSubCategoriesPage"));

// const CategoriesPage = lazy(() => import("./views/pages/categories/CategoriesPage"));

const OrderPage = lazy(() => import("./views/pages/order/OrderPage"));
const Order = lazy(() => import("views/pages/order/view-one/Order"));

const MyAccountPage = lazy(() => import("views/pages/my_account/MyAccount"));
const SocialMedia = lazy(() =>import("./views/pages/socialMedia/SocialMediaPage"));
const SliderPage = lazy(() =>import("./views/pages/Slider/SliderPage"));
const UsersPage = lazy(() => import("./views/pages/users/UsersPage"));
const PrivacyPage = lazy(() =>import("./views/pages/information/privacy/PrivacyPage"));
const AboutUsPage = lazy(() =>import("./views/pages/information/about_us/AboutUsPage"));
const login = lazy(() => import("./views/pages/authentication/login/Login"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  auth,
  isPrivate,
  ...rest
}) => {
  const ToRender = () => (
    <Route
      {...rest}
      render={(props) => {
        return (
          <ContextLayout.Consumer>
            {(context) => {
              let LayoutTag =
                fullLayout === true
                  ? context.fullLayout
                  : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout;
               
              return (
                <LayoutTag {...props} permission={auth.user.role}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              );
            }}
          </ContextLayout.Consumer>
        );
      }}
    />
  );

  if (isPrivate) {
    return (
      <AuthComponent>
        <ToRender />
      </AuthComponent>
    );
  }
  return <ToRender />;
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          {/* <AppRoute exact path="/" component={HomePage} isPrivate /> */}
          <AppRoute
            exact
            path="/myAccount"
            component={MyAccountPage}
            isPrivate
          />
          
          <AppRoute
          
          exact
          path="/dashboard"
          component={Page}
          isPrivate
          />
           
          <AppRoute
          
          exact
          path="/dashboard/add"
          component={AddPage}
          isPrivate
          />
             <AppRoute
            exact
            path="/orders"
            component={OrderPage}
            isPrivate
          />
          
          {/* <AppRoute
            exact
            path="/delivery_fee"
            component={DelevaryFee}
            isPrivate
          /> */}
          <AppRoute
            exact
            path="/contact"
            component={Contact}
            isPrivate
          />
           <AppRoute
            exact
            path="/Static_info"
            component={StaticInfoPage}
            isPrivate
          />
          
          <AppRoute
            exact
            path="/services/First&Second"
            component={FirstAndSecondService}
            isPrivate
          />
           <AppRoute
            exact
            path="/services/Third"
            component={ThirdSevice}
            isPrivate
          /> <AppRoute
            exact
            path="/services/Fourth"
            component={FourthSevice}
            isPrivate
          />
           <AppRoute
            exact
            path="/services/Fifth"
            component={FifthService}
            isPrivate
          />
           <AppRoute
            exact
            path="/services/Sixth"
            component={SixthSerivce}
            isPrivate
          />
          <AppRoute
            exact
            path="/ourworks"
            component={OurWorks}
            isPrivate
          />

             {/* <AppRoute
            exact
            path="/website"
            component={Website}
            isPrivate
          /> */}
          <AppRoute
            exact
            path="/slider"
            component={SliderPage}
            isPrivate
          />
                {/* <AppRoute
          /> */}
                <AppRoute
              exact
              path="/order/:id"
              component={Order}
              isPrivate
            />
             <AppRoute
            exact
            path="/products"
            component={ProductPage}
            isPrivate
          /> 
             <AppRoute
            exact
            path="/products/add"
            component={AddProductPage}
            isPrivate
          />
            <AppRoute
            exact
            path="/products/:id"
            component={UpdateProductPage}
            isPrivate
          />
          
          <AppRoute
            exact
            path="/categories"
            component={CategoriesPage}
            isPrivate
          /> 
           {/* <AppRoute
            exact
            path="/subcategories"
            component={SubCategoriesPage}
            isPrivate
          />
           <AppRoute
            exact
            path="/subsubcategories"
            component={SubSubCategoriesPage}
            isPrivate
          /> */}
          
          <AppRoute
            exact
            path="/"
            component={SocialMedia}
            isPrivate
          />
              <AppRoute
            exact
            path="/information/privacy"
            component={PrivacyPage}
            isPrivate
          />
          <AppRoute
            exact
            path="/information/about-us"
            component={AboutUsPage}
            isPrivate
          />
            {/* <AppRoute
            exact
            path="/accounts/role"
            component={RolePage}
            isPrivate
          /> */}
         {/* <AppRoute
            exact
            path="/accounts/role/add"
            component={AddRolePage}
            isPrivate
          /> */}
          <AppRoute exact path="/users" component={UsersPage} isPrivate />
          {/* <AppRoute
            exact
            path="/accounts/view"
            component={ViewAccounts}
            isPrivate
          /> */}
          {/* <AppRoute
            exact
            path="/accounts/edit"
            component={EditAccount}
            isPrivate
          /> */}
          {/* <AppRoute exact path="/users" component={UsersPage} isPrivate /> */}

          {/* <AppRoute
            exact
            path="/accounts/add"
            component={AddAccount}
            isPrivate
          /> */}
         
          <AppRoute path="/login" component={login} fullLayout />
          <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;

