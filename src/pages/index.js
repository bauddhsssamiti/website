import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				You choose are great vacation
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"You choose are great vacation"} />
			<meta property={"og:description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/favicon.png?v=2021-09-23T20:33:18.314Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/270.png?v=2021-09-23T20:33:32.819Z"} />
			<meta name={"msapplication-TileColor"} content={"#0CAD1C"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header" border-width="1px" border-style="solid">
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				max-height="80px"
				src="https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/logo.svg?v=2021-09-23T21:07:52.037Z"
				width="25%"
				height="auto"
				lg-max-width="150px"
				sm-width="50%"
			/>
			<Components.QuarklycommunityKitMobileSidePanel width="50%" order="1" align-self="auto">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
					>
						Home
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
					>
						About
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
					>
						Advisors
					</Link>
					<Link
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
					>
						Contact
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="60px 0 20px 0" quarkly-title="HeroBlock">
			<Text
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
				margin="0px 0px 0px 0px"
				font="--headline1"
				text-align="center"
			>
				BUDDH SAMAJIK SUDHAR SAMITI
			</Text>
			<Image
				max-height="600px"
				object-position="0% 80%"
				lg-max-height="300px"
				md-max-height="200px"
				sm-max-height="150px"
				src="https://uploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14:51:44.233Z"
				width="100%"
				object-fit="cover"
				margin="32px 0px 0px 0px"
				srcSet="https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/WhatsApp%20Image%202025-07-30%20at%2020.55.45_76c8bedb.jpg?v=2025-08-01T14%3A51%3A44.233Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0" border-width="1px" border-style="solid">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
					flex="0 1 auto"
					margin="0px 0px 0px 0px"
					padding="0px 0 0px 0px"
				>
					WHO{"  "}
					<br />
					ARE
				</Text>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="40%"
					display="flex"
					md-width="100%"
					empty-min-width="64px"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--headline2"
						color="--green"
						lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
						sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							WE
						</Span>
						{" "}
						<br />
					</Text>
				</Box>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="2px 0px 0px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Bauddh Samajik Sudhar Samiti is a non-profit, non-governmental organization committed to educating, serving, and uplifting underprivileged communities throughout India.
				</Text>
			</Box>
		</Section>
		<Section padding="54px 0 90px 0" overflow-x="hidden" overflow-y="hidden">
			<Text
				margin="0px 0px 32px 0px"
				font="--headline3"
				color="--dark"
				lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 600 18px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				What We Do
			</Text>
			<Text
				margin="0px 0px 32px 0px"
				font="--base"
				color="--dark"
				lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 600 18px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				We run a postgraduate college, CLPSBM, located in Sriduttagunj, Balarampur district, offering both BA and MA courses. In addition to academic programs, we organize eye camps, health camps, yoga training sessions, and blood donation drives. We also conduct blanket distribution initiatives and raise awareness about important social issues such as child marriage and domestic violence.
			</Text>
			<Components.QuarklycommunityKitCarousel
				showLink={false}
				max-width="415px"
				autoPlayIntervalProp="5s"
				slidesProp="10"
				overflow-x="visible"
				showHead
				showText={false}
				showDots={false}
				showArrows={false}
				overflow-y="visible"
				autoPlay={false}
			>
				<Override slot="Slide Head 4">
					Eye Camp
				</Override>
				<Override slot="Slide Image 7" src="https://images.unsplash.com/photo-1585911735226-1c39d1df845b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=534&q=80" />
				<Override slot="Slide Image 10" src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80" />
				<Override slot="Slide Head 7">
					Health Camp
				</Override>
				<Override slot="Slide Image 9" src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80" />
				<Override
					slot="Slide Head"
					color="--dark"
					margin="0px 0px 0px 0px"
					font="600 24px/1.3 --fontFamily-googleManrope"
					lg-font="600 18px/1.3 --fontFamily-googleManrope"
					md-font="600 16px/1.3 --fontFamily-googleManrope"
					width="100%"
					text-align="left"
				>
					AdventuresAdventures
				</Override>
				<Override slot="Slide Image 1" src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=530&q=80" />
				<Override slot="Slide Image 2" src="https://images.unsplash.com/photo-1621373271317-3673c281cedc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80" />
				<Override slot="Slide Image 3" src="https://images.unsplash.com/photo-1518560122155-9eae8eda7181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80" />
				<Override slot="Slide Head 5">
					Blood Donation
				</Override>
				<Override slot="Slide Head 8">
					Blanket Distribution
				</Override>
				<Override slot="Slide Head 9">
					Child Marriage Awareness
				</Override>
				<Override slot="Slide Head 10">
					Domestic Violence
				</Override>
				<Override slot="Slide Image" padding="0px 35px 0px 0px" />
				<Override
					slot="Slide Content"
					width="100%"
					padding="0px 35px 0px 0px"
					top="auto"
					bottom="-58px"
					display="flex"
					justify-content="flex-start"
				/>
				<Override slot="Slide Head 1">
					Adventures
				</Override>
				<Override slot="Slide Head 2">
					Beach vacations
				</Override>
				<Override slot="Slide Image 5" src="https://images.unsplash.com/photo-1595057083625-5e33c9372312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=570&q=80" />
				<Override slot="Slide Head 3">
					Honeymoons
				</Override>
				<Override slot="Slide Image 4" src="https://images.unsplash.com/photo-1598737285721-29346a5c9278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80" />
				<Override slot="Slide Head 6">
					Luxury hotels & resorts
				</Override>
				<Override slot="Slide Image 6" src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80" />
				<Override slot="Slide Image 8" src="https://images.unsplash.com/photo-1520587963533-65f1795bde61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80" />
			</Components.QuarklycommunityKitCarousel>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0" border-width="1px" border-style="solid">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
					flex="0 1 auto"
					margin="0px 0px 0px 0px"
					padding="0px 0 0px 0px"
				>
					OUR
				</Text>
				<Box
					empty-min-height="64px"
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					width="40%"
					display="flex"
					md-width="100%"
					empty-min-width="64px"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--headline2"
						color="--green"
						lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
						sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
					>
						{" "}VISION
					</Text>
				</Box>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="2px 0px 0px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					To create a fair, knowledgeable, and inclusive society where each person is empowered to live with dignity, meaning, and compassion.{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Components.QuarklycommunityKitCarousel>
			<Override slot="Slide Text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</Override>
			<Override slot="Slide Head">
				Header
			</Override>
		</Components.QuarklycommunityKitCarousel>
		<Section padding="74px 0 24px 0" border-width="1px" border-style="solid">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				margin="0px 0px 16px 0px"
				width="100%"
				padding="16px 16px 16px 16px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text font="--headline3" color="--dark" lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif" margin="0px 0px 0px 0px">
					Team
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
					srcSet="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="16px 0px 13px 0px" font="--headline4" color="--dark">
						Jane Smith
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp" linked-in="https://linkedin.com/">
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
						<Override
							slot="link"
							border-radius="50%"
							hover-background="transparent"
							display="flex"
							justify-content="center"
							height="36px"
							align-items="center"
							background="none"
							color="--grey"
							hover-color="--light"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
						/>
						<Override
							slot="icon"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
						/>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					lg-min-height="200px"
					srcSet="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Laura Walker
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" instagram="https://instagram.com/instagram">
						<Override
							slot="link"
							justify-content="center"
							background="none"
							color="--grey"
							display="flex"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
							height="36px"
							align-items="center"
							border-radius="50%"
							hover-color="--light"
						/>
						<Override
							slot="icon"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80"
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					srcSet="https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					md-justify-content="space-between"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
				>
					<Text font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="16px 0px 13px 0px">
						Kristen Hudson
					</Text>
					<SocialMedia linked-in="https://linkedin.com/" margin="0px 0px 0px -3px" justify-content="flex-start">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							margin="0 5px 0 5px"
							width="36px"
							justify-content="center"
							background="none"
							hover-color="--light"
							hover-background="transparent"
							padding="5x 5px 5px 5px"
							height="36px"
							display="flex"
							align-items="center"
						/>
						<Override
							slot="icon"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
							border-radius="50px"
							lg-font="30px sans-serif"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
			>
				<Image
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="30% 0%"
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80"
					srcSet="https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Katelin Stewart
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp">
						<Override
							slot="link"
							color="--grey"
							padding="5x 5px 5px 5px"
							width="36px"
							align-items="center"
							border-radius="50%"
							hover-color="--light"
							hover-background="transparent"
							margin="0 5px 0 5px"
							height="36px"
							display="flex"
							justify-content="center"
							background="none"
						/>
						<Override
							slot="icon"
							size="34px"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 30px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Contacts{"  "}
				</Text>
				<Link
					href="mailto:blank?hello@company.com"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					bauddhsamajiksudharsamiti@gmail.com
				</Link>
				<Link
					href="tel:1234567899"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					+91-9455000989
				</Link>
				<Text margin="0px 0px 48px 0px" font="--headline4" color="--light" text-align="center">
					Head Office: A-1, Liberty Colony, Sarvodaya Nagar, Lucknow, Uttar Pradesh India
				</Text>
				<Text margin="0px 0px 48px 0px" font="--headline4" color="--light" text-align="center">
					Branch Office: Chaudhary Lalta Prasad Singh Bauddh Mahavidyalaya, 
Sriduttagunj, Balarampur District, Uttar Pradesh, India
				</Text>
				<Image
					src="https://uploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17:23:34.468Z"
					display="block"
					align-self="stretch"
					srcSet="https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/688cd41e061617001eff88c4/images/Screenshot%202025-08-01%20225020.jpg?v=2025-08-01T17%3A23%3A34.468Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});