Iron Devils Scouting App Data Pull
README
last modified Feb 25, 2014
version 1.1
----------------------------------
1. Prerequisites:
 - Windows + MS Excel
 - Android devices and usb cables with USB dedugging enabled
 - Iron Devils scripts/Excel documents
 - adb installed/able to use - see getadt.bat for download link, we cannot include the it due to Google's terms
 - Ability to use adb as environment variable 
   (see http://www.redmondpie.com/how-to-set-up-android-adb-and-fastboot-on-windows-tutorial/ for a good tutorial)
   test by opening command prompt and typing "adb devices" (no quotes), should display a device if connected

2. Procedures
 - Extract all files to a folder of your choice
 - plug in tablet
 - run the pullXML.bat to start the process
 - allow the process to do its thing
 - Competition XML is saved in root of folder
 - Excel will be opened
 - IMPORTANT: Enable macros! this will open a dialog to auto-import data. restart excel if you close
 - Browse for the file and your data will be imported
 - To get rankings, go to the Rankings tab, set weightings, and click the button

 Video here:

3. Troubleshooting

	.bat file displays an adb error (CODE 1)
		Your adb is not set up correctly or a device is not connected.
		Refer to the link in the prerequisites for setup instructions

	.bat file can't do the merge or displays a java error (CODE 2)
		Either your java is not set up correctly or the paths in your filesystem is not set up correctly
		Ensure "java" in the command prompt works
		Then ensure that you have an XMLFiles folder, with folders of Matches and Old inside
		Your Competition.xml should be inside the XMLFiles folder
		All bat and java files should be at the root of the scouting folder
	
	Cannot find the Competition.xml file in the Excel dialog box
		It is in the root of the scouting folder

	Excel problems?
		Macros work and have been tested in Excel 2010 and on multiple machines
		usually Excel 2007+ is needed
	Bat file not opening Excel
		Be sure to rename one of the premade excel files as scouting.xlsm