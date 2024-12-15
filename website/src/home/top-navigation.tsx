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
import { FlexRow } from "~/home/flex.tsx";
import { actions, topNav } from "./top-navigation.css";

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
				<a href="/foundation">Foundation</a>
			</li>
			<li>
				<a href="/patterns">Patterns</a>
			</li>
			<li>
				<a href="/components">Components</a>
			</li>
			<li>
				<a href="/demos">Demos</a>
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
