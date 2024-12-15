import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { InputPrefix, TextBox } from "@progress/kendo-react-inputs";
import {
	AppBar,
	AppBarSection,
	AppBarSpacer,
	Avatar,
} from "@progress/kendo-react-layout";
import { menuIcon, searchIcon } from "@progress/kendo-svg-icons";
import { NavLink } from "react-router";
import { FlexRow } from "~/home/flex.tsx";
import { actions, topNav } from "./top-navigation.css.ts";

export function TopNavigation() {
	return (
		<nav className={topNav}>
			<AppBar themeColor="primary">
				<AppBarSection>
					<SideNavigationMenuButton />
				</AppBarSection>
				<AppBarSection>
					<Title />
				</AppBarSection>
				<AppBarSpacer />
				<AppBarSection>
					<FlexRow gap={8}>
						<TopNavigationActions />
						<TopNavigationSearch />
						<UserAvatar />
					</FlexRow>
				</AppBarSection>
			</AppBar>
		</nav>
	);
}

function SideNavigationMenuButton() {
	return <Button type="button" fillMode="flat" svgIcon={menuIcon} />;
}

function Title() {
	return <div>Phantom UI</div>;
}

function TopNavigationActions() {
	return (
		<ul className={actions}>
			<li>
				<NavLink to="/foundation">Foundation</NavLink>
			</li>
			<li>
				<NavLink to="/patterns">Patterns</NavLink>
			</li>
			<li>
				<NavLink to="/components">Components</NavLink>
			</li>
			<li>
				<NavLink to="/demos">Demos</NavLink>
			</li>
		</ul>
	);
}

function TopNavigationSearch() {
	return (
		<form
			onSubmit={() => {
				window.alert("Search is not yet implemented");
			}}
		>
			<TextBox placeholder="Search" prefix={SearchIcon} />
		</form>
	);
}

function SearchIcon() {
	return (
		<InputPrefix>
			<SvgIcon icon={searchIcon} />
		</InputPrefix>
	);
}

function UserAvatar() {
	return (
		<Avatar type="image">
			<img
				src="https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png"
				alt="Kendoka"
			/>
		</Avatar>
	);
}
