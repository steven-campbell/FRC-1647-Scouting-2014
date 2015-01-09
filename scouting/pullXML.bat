@echo off
echo.
echo.
echo  ___________ _____ _   _  ______ _____ _   _ _____ _      _____ 
echo ^|_   _^| ___ \  _  ^| \ ^| ^| ^|  _  \  ___^| ^| ^| ^|_   _^| ^|    /  ___^|
echo   ^| ^| ^| ^|_/ / ^| ^| ^|  \^| ^| ^| ^| ^| ^| ^|__ ^| ^| ^| ^| ^| ^| ^| ^|    \ `--. 
echo   ^| ^| ^|    /^| ^| ^| ^| . ` ^| ^| ^| ^| ^|  __^|^| ^| ^| ^| ^| ^| ^| ^|     `--. \
echo  _^| ^|_^| ^|\ \\ \_/ / ^|\  ^| ^| ^|/ /^| ^|___\ \_/ /_^| ^|_^| ^|____/\__/ /
echo  \___/\_^| \_^|\___/\_^| \_/ ^|___/ \____/ \___/ \___/\_____/\____/ 
echo.
echo.
echo  ************************************************************
echo  **                                                        **
echo  **     Iron Devils Scouting App Data Pull version 1.0     **
echo  **         Please connect a tablet then continue          **
echo  **                                                        **
echo  ************************************************************
echo.
echo.
pause
GOTO Adb

:Adb
echo Attempt to pull data...
adb pull sdcard/scouting %CD%\XMLFiles\Matches
IF %ERRORLEVEL% == 0 echo ***********************
IF %ERRORLEVEL% == 0 echo **                   **
IF %ERRORLEVEL% == 0 echo **   data pulled     **
IF %ERRORLEVEL% == 0 echo **                   **
IF %ERRORLEVEL% == 0 echo ***********************
IF %ERRORLEVEL% == 0 echo.
IF %ERRORLEVEL% == 0 echo.
IF %ERRORLEVEL% == 0 GOTO Merge
echo ***********************************************************
echo **                 ___  __   __   __   __                **
echo **                ^|__  ^|__) ^|__) /  \ ^|__)               **
echo **                ^|___ ^|  \ ^|  \ \__/ ^|  \               **
echo **                                                       **
echo **                                                       **
echo **        There is an error with your ADB setup.         **
echo **                 Refer to the readme.                  **
echo **                         code 1                        **
echo **                                                       **
echo ***********************************************************
echo.
echo.                        
GOTO Abortadb

:Merge
set XMLPATH= %CD%\XMLFiles\Matches
echo Continue to merge XML to 1 file (Java required)
call "frc1647 Scouting Merger.exe" %CD%\XMLFiles\Matches Competition.xml
IF %ERRORLEVEL% == 0 echo ****************************
IF %ERRORLEVEL% == 0 echo **                        **
IF %ERRORLEVEL% == 0 echo **     Merge complete     **
IF %ERRORLEVEL% == 0 echo **                        **
IF %ERRORLEVEL% == 0 echo ****************************
IF %ERRORLEVEL% == 0 echo.
IF %ERRORLEVEL% == 0 echo.
IF %ERRORLEVEL% == 0 GOTO End
echo ********************************************************************
echo **                 ___  __   __   __   __                         **
echo **                ^|__  ^|__) ^|__) /  \ ^|__)                        **
echo **                ^|___ ^|  \ ^|  \ \__/ ^|  \                        **
echo **                                                                **
echo **                                                                **
echo **        There is an error with your java or file setup.         **
echo **                     Refer to the readme.                       **
echo **                           code 2                               **
echo **                                                                **
echo ********************************************************************
echo.
echo. 
GOTO Abortmerge

:Abortadb
pause
exit 1

:Abortmerge
pause
exit 2

:End
call scouting.xlsm
pause
exit 0