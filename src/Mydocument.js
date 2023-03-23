import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Font
} from "@react-pdf/renderer";
import data from "./mockjson.json";

// Create styles
// Font.register({ family: "Times-Roman", src: source });

const styles = StyleSheet.create({
	page: {
		flexDirection: "column",
		backgroundColor: "white",
		width: "100vw"
	},
	headermain: {
		fontFamily: "Times-Bold",
		fontSize: "12px",
		marginTop: "30px"
	},
	header1: {
		width: "100vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	header2: {
		marginTop: "20px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: "50px"
	},
	header3: {
		marginTop: "20px",
		width: "100vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	textmargin: {
		margin: "2px"
	},
	table: {
		width: "100vw",
		display: "flex",
		flexDirection: "column",
		marginTop: "10px",
		padding: "20px"
	},
	tableheader: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		fontFamily: "Times-Bold",
		fontSize: "10px",
		border: "1px solid black",
		height: "30px"
	},
	tableheader1: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "70%",
		justifyContent: "space-between",
		borderRight: "1px solid black",
		height: "100%"
	},
	tableheader2: {
		width: "15%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRight: "1px solid black",
		height: "100%"
	},
	tableheader3: {
		width: "15%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	tableinnerheader: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		fontFamily: "Times-Bold",
		fontSize: "8px",
		border: "1px solid black",
		borderTop: "none",
		height: "30px"
	},
	tableinnerheadersec1: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "70%",
		height: "100%"
	},
	tableinnerheaderele: {
		justifyContent: "center",
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textAlign: "center"
	},
	tableinnerheadernameele: {
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "2000px",
		height: "100%",
		textAlign: "center",
		paddingLeft: "5px"
	},
	tableinnerheaderboardele: {
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "550px",
		height: "100%",
		textAlign: "center",
		paddingLeft: "5px"
	},
	tableinnerheadersec2: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "30%",
		height: "100%"
	},
	tabledata: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		fontFamily: "Times-Roman",
		fontSize: "8px",
		border: "1px solid black",
		borderTop: "none",
		height: "30px"
	},
	tabledatasec1: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "70%",
		height: "100%"
	},
	tabledataele: {
		justifyContent: "center",
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textAlign: "center"
	},
	tabledataappliele: {
		justifyContent: "center",
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "450px",
		height: "100%",
		textAlign: "center"
	},
	tabledatanameele: {
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "2000px",
		height: "100%",
		textAlign: "center",
		paddingLeft: "5px"
	},
	tabledataboardele: {
		borderRight: "1px solid black",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "550px",
		height: "100%",
		textAlign: "center",
		paddingLeft: "5px"
	},
	tabledatamarksele1: {
		height: "50%",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderBottom: "1px solid black"
	},
	tabledatamarksele2: {
		height: "50%",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	tabledatasec2: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "30%",
		height: "100%"
	}
});

// Create Document Component
export const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles.page} wrap>
			// College Info
			<View style={styles.headermain} fixed>
				<View style={styles.header1}>
					<Text style={styles.textmargin}>
						DIRECTORATE OF TECHNICAL EDUCATION :: CHENNAI 600 025
					</Text>
					<Text style={styles.textmargin}>
						ADMISSION TO FIRST YEAR B.E / B.TECH / B.ARCH DEGREE COURSES
						2021-2022
					</Text>
				</View>
				<View style={styles.header2}>
					<Text style={styles.textmargin}>
						ANNEXURE TO LETTER NO: 4703/ECA2/2022
					</Text>
					<Text style={styles.textmargin}>DATED &nbsp; /02/2022</Text>
				</View>
				<View style={styles.header3}>
					<Text style={styles.textmargin}>LIST OF CANDIDATES APPROVED</Text>
					<Text style={styles.textmargin}>
						2702-BANNARI AMMAN INSTITUTE OF TECHNOLOGY (AUTONOMOUS),
					</Text>
					<Text style={styles.textmargin}>
						SATHYAMANAGALAM, ERODE DISTRICT 638401
					</Text>
				</View>
			</View>
			//first heading
			<View style={styles.table}>
				<View style={styles.tableheader} fixed>
					<View style={styles.tableheader1}>
						<Text>Branch: AD</Text>
						<Text style={{ marginRight: "30px" }}>
							AD-ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
						</Text>
					</View>
					<View style={styles.tableheader2}>
						<Text>SAN: 120</Text>
					</View>
					<View style={styles.tableheader3}>
						<Text>ADM: 121</Text>
					</View>
				</View>
				//second heading
				<View style={styles.tableinnerheader} fixed>
					<View style={styles.tableinnerheadersec1}>
						<View style={styles.tableinnerheaderele}>
							<Text>S.no</Text>
						</View>
						<View style={styles.tabledataappliele}>
							<Text>APPL NO</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>QUOTA</Text>
						</View>
						<View style={styles.tableinnerheadernameele}>
							<Text>NAME</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>NAT</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>COM</Text>
						</View>
						<View style={styles.tableinnerheaderboardele}>
							<Text>STATE BOARD</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>MOB</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>POB</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>COB</Text>
						</View>
					</View>
					<View style={styles.tableinnerheadersec2}>
						<View style={styles.tableinnerheaderele}>
							<Text>TOT OBT</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>%</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>FG</Text>
						</View>
						<View style={styles.tableinnerheaderele}>
							<Text>AFW</Text>
						</View>
					</View>
				</View>
				//map data
				{data.list.map((candidate, index) => {
					return (
						<View style={styles.tabledata}>
							<View style={styles.tabledatasec1}>
								<View style={styles.tabledataele}>
									<Text>{index}</Text>
								</View>
								<View style={styles.tabledataappliele}>
									<Text>{candidate.appliNo}</Text>
								</View>
								<View style={styles.tabledataele}>
									<Text>{candidate.QUOTA}</Text>
								</View>
								<View style={styles.tabledatanameele}>
									<Text>{candidate.NAME}</Text>
								</View>
								<View style={styles.tabledataele}>
									<Text>{candidate.NAT}</Text>
								</View>
								<View style={styles.tabledataele}>
									<Text>{candidate.COM}</Text>
									<Text>{candidate.COM2}</Text>
								</View>
								<View style={styles.tabledataboardele}>
									<Text>{candidate.STATEBOARD}</Text>
									<Text>{candidate.STATEBOARD2}</Text>
								</View>
								<View style={styles.tabledataele}>
									<View style={styles.tabledatamarksele1}>
										<Text> {candidate.MOB}</Text>
									</View>
									<View style={styles.tabledatamarksele2}>
										{" "}
										<Text>{candidate.MOB2}</Text>{" "}
									</View>
								</View>
								<View style={styles.tabledataele}>
									<View style={styles.tabledatamarksele1}>
										{" "}
										<Text>{candidate.POB}</Text>{" "}
									</View>
									<View style={styles.tabledatamarksele2}>
										{" "}
										<Text>{candidate.POPB}</Text>{" "}
									</View>
								</View>
								<View style={styles.tabledataele}>
									<View style={styles.tabledatamarksele1}>
										{" "}
										<Text> {candidate.COB}</Text>
									</View>
									<View style={styles.tabledatamarksele2}>
										{" "}
										<Text>{candidate.COM2}</Text>{" "}
									</View>
								</View>
							</View>
							<View style={styles.tabledatasec2}>
								<View style={styles.tabledataele}>
									<View style={styles.tabledatamarksele1}>
										{" "}
										<Text>{candidate.TOTOBT}</Text>{" "}
									</View>
									<View style={styles.tabledatamarksele2}>
										{" "}
										<Text>{candidate.TOTOBT2}</Text>{" "}
									</View>
								</View>
								<View style={styles.tabledataele}>
									<Text>{candidate.percentage}</Text>
								</View>
								<View style={styles.tabledataele}>
									<Text>{candidate.FG}</Text>
								</View>
								<View style={styles.tabledataele}>
									<Text>{candidate.AFW}</Text>
								</View>
							</View>
						</View>
					);
				})}
			</View>
		</Page>
	</Document>
);
