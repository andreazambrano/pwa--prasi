import {RouterModule,Routes} from '@angular/router';
import {
	AboutComponent,
	AlltixslistComponent,
	AddtixsComponent,
	AlltixsleftComponent,
	AffiliatesComponent,
	AffiliateDetailComponent,
	AlltixsComponent,
	AffiliateComponent,
	AssbookComponent,
	BookingComponent,
	CancelbookComponent,
	ContentComponent,
	ContentiComponent,
	ContentboxComponent,
	ContentpanelComponent,
	ComingComponent,
	ContactoComponent,
	CheckoutComponent,
	DeletevalidationComponent,
	LayoutComponent,
	LoginComponent,
	MyTixsComponent,
	NewMemberComponent,
	MainmenuComponent,
	ModalegresoComponent,
	ModalingresoComponent,
	ModalwelcomeComponent,
	PartnersComponent,
	PartnerDetailComponent,
	PartnerComponent,
	ProfileComponent,
	SliderHomeComponent,
	SignupComponent,
	SuccessbookComponent,
	SuccessaComponent,
	SuccesscontactComponent,
	SuccessvalidationComponent,
	SuccesscancelbookComponent,
	SuccessdeletevalidationComponent,
	TixDetailComponent,
	TreksComponent,
	TreklistComponent,
	TrekeditComponent,
	ValidationComponent,
	ValistComponent,
	WrapperComponent,
	CurrencyselectorComponent,
	TestappComponent,
	PrasitopbarComponent,
	PrasisliderComponent,
	PrasicategorycarouselComponent,
	PrasiproductcatalogComponent,
	PrasiinstagramfeedComponent,
	PrasitopfooterComponent,
	PrasifooterComponent,
	PrasiaboutoverlayComponent,
	PrasicartoverlayComponent,
	PrasisearchoverlayComponent,
	PrasiproductdetailComponent,
	PrasicontactComponent,	
	PrasiaboutComponent,
	PrasidevolucionesComponent,
	AdminComponent,
	PrasifilterComponent,
	PrasishopcartComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'alltixs',component:AlltixsComponent},
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard]},
	{path:'login',component:LoginComponent},
	{path:'affiliates',component:AffiliatesComponent,canActivate:[AuthGuard]},		
	{path:'partners',component:PartnersComponent,canActivate:[AuthGuard]},
	{path:'partner-detail/:id',component:PartnerDetailComponent, canActivate:[AuthGuard]},
	{path:'affiliate-detail/:id',component:AffiliateDetailComponent, canActivate:[AuthGuard]},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'signup',component:SignupComponent},
	{path:'coming',component:ComingComponent},
	{path:'new-member',component:NewMemberComponent, canActivate:[AuthGuard]},
	{path:'new-member/partner',component:PartnerComponent, canActivate:[AuthGuard]},
	{path:'new-member/affiliate',component:AffiliateComponent, canActivate:[AuthGuard]},
	{path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
	{path:'addtixs',component:AddtixsComponent },
	{path:'booking',component:BookingComponent, canActivate:[AuthGuard]},
	{path:'alltixslist',component:AlltixslistComponent},
	{path:'alltixsleft',component:AlltixsleftComponent},
	{path:'about',component:AboutComponent},	
	{path:'treks',component:TreksComponent},
	{path:'trekedit',component:TrekeditComponent,canActivate:[AuthGuard]},
	{path:'treklist',component:TreklistComponent,canActivate:[AuthGuard]},
	{path:'contacto',component:ContactoComponent},
	{path:'checkout',component:CheckoutComponent},
	{path:'valist',component:ValistComponent,canActivate:[AuthGuard]},
	{path:'successbook',component:SuccessbookComponent},
	{path:'successa',component:SuccessaComponent},
	{path:'validation',component:ValidationComponent},
	{path:'assbook',component:AssbookComponent},
	{path:'successvalidation',component:SuccessvalidationComponent},	
	{path:'cancelbook',component:CancelbookComponent},	
	{path:'successcancelbook',component:SuccesscancelbookComponent},	
	{path:'successcontact',component:SuccesscontactComponent},
	{path:'deletevalidation',component:DeletevalidationComponent},
	{path:'mainmenu',component:MainmenuComponent},
	{path:'successdeletevalidation',component:SuccessdeletevalidationComponent},
	{path:'modalwelcome',component:ModalwelcomeComponent},
	{path:'layout',component:LayoutComponent},
	{path:'content',component:ContentComponent},
	{path:'contenti',component:ContentiComponent},
	{path:'contentbox',component:ContentboxComponent},
	{path:'contentpanel',component:ContentpanelComponent},
	{path:'wrapper',component:WrapperComponent},
	{path:'modalegreso',component:ModalegresoComponent},
	{path:'modalingreso',component:ModalingresoComponent},
	{path:'currencyselector',component:CurrencyselectorComponent},
	{path:'prasitopbar',component:PrasitopbarComponent},
	{path:'prasislider',component:PrasisliderComponent},
	{path:'prasicategorycarousel',component:PrasicategorycarouselComponent},
	{path:'prasiproductcatalog',component:PrasiproductcatalogComponent},
	{path:'prasiinstagram',component:PrasiinstagramfeedComponent},
	{path:'prasitopfooter',component:PrasitopfooterComponent},
	{path:'prasifooter',component:PrasifooterComponent},
	{path:'prasiaboutoverlay',component:PrasiaboutoverlayComponent},
	{path:'prasicartoverlay',component:PrasicartoverlayComponent},
	{path:'prasisearchoverlay',component:PrasisearchoverlayComponent},
	{path:'prasiproductdetail/:id',component:PrasiproductdetailComponent},
	{path:'prasicontact',component:PrasicontactComponent},
	{path:'prasiabout',component:PrasiaboutComponent},
	{path:'prasidevoluciones',component:PrasidevolucionesComponent},
	{path:'admin',component:AdminComponent},
	{path:'prasifilter/:category',component:PrasifilterComponent},
	{path:'prasishopcart',component:PrasishopcartComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	
	];
	export const app_routing = RouterModule.forRoot(app_routes);

