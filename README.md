# DUL_OLAP_Grapefruit
This project was created as example usage of OLAP Grapefruit plugin with combination of local mssql analytics service. As requested, it contains all the possible steps to make it wok.
### Features

- Via the usage of Grapefruit OLAP library, you are able to dynamically fetch OLAP cube definition and make slices of the cube;
- Respective Asp .net core 2.1 nugets are preconfigured, so you can build this easily. 

### Pre-requisities
- Windows 10 1903+
- Visual studio 2019
- .Net core 2.1 sdk & runtime

##Disclaimer
This project is meant for educational purposes ONLY. Any potential breach of license provided by third parties is unintentional and will be corrected if author is properly notified.

Setup (Underline)
=============
0. Download this project from git
1. Download Component One framework https://www.grapecity.com/componentone
	* With the usage of provided installer, install only theese plugins Asp .net, .net core,
		* Asp .Net Core
		* .Net Core
		* Wijimo
		* OLAP Services (Should not be neccessary 2020+)
		* Web-api Data engine
	* You will have GrapeCity License manager accessible in Visual studio now.
	* With the usage of search bar in VS, find grapecity license manager, and generate trial license.
	* You can paste that generated key in appconfig.json in.. 'clic' key -> value
2. Download Microsoft SQL Server Management Studio 18
3. Download SQL Server 2019
	* Developer edition only! (Or trial comercial)
	* Install it wherever you want, but select theese components:
		* Database Engine
		* Analysis Services
4. After you have SQLS 2019 installed, go to Sql Server Configuration Manager
	* In sql server services tab:
		* Start sql service
		* Start analysis service
5. Download Adventure works database olap db:
	* https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver15 - dowload AW2014.bak
	* https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks-analysis-services
	* Download model project, and full db backup. It is based on AW2014DW, so don´t use any other version of db, download the 2014 one.
	* You can use eighter standard or enterprise, but don´t combine them.
	* (The model project will create olap cube in your running analysis service)
6. Use provided model project from microsoft to generate olap cube
	* For you, to be able to even open the project, you will need analysis extension from microsoft. - Microsoft Analysis Services Projects
		* https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftAnalysisServicesModelingProjects
		(Yes it is badly rated, but you will need it)
	* Generate the olap cube => build the project.
		* Right click on the solution and deploy it.
		* If this succeeds, it means that everything is configured correctly.
7. Open this project, edit connection string in Setup.cs accordingly to your own setup.
	(Your computer name is the domain btw)
	Project should run without errors now.
	You will be able to see front-end snippet in action.
