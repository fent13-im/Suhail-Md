const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233241139503";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg" // "true" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "ture"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "my_contact";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_49_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNW5SOUhVaWQ2dGYzQWZsUVQ5Y3R4cmN1d1FXMGZpaDQ3QmtJbGE3bWw5VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDExMzk1MDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1QTRDNzQ1NUU2MkZFOTRDRjk1RDg0QUUzRDgyQUM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEyMzM4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWS2lGV3BuMlFlbTY4MVhtM2JHWXNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzNWZhY2E2LWZhM2QtNDZmMC05ZmI4LWZiNzFhMTNlYmFiNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDYzLFxuICAgICAgNyxcbiAgICAgIDE4NyxcbiAgICAgIDExMSxcbiAgICAgIDIxMSxcbiAgICAgIDg0LFxuICAgICAgNjksXG4gICAgICAyMTYsXG4gICAgICAyOCxcbiAgICAgIDE3OSxcbiAgICAgIDIxNCxcbiAgICAgIDI1MixcbiAgICAgIDIxMSxcbiAgICAgIDE1MSxcbiAgICAgIDE1MyxcbiAgICAgIDczLFxuICAgICAgMTg4LFxuICAgICAgODksXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICA4LFxuICAgICAgMjMwLFxuICAgICAgODEsXG4gICAgICAyNixcbiAgICAgIDUxLFxuICAgICAgNTUsXG4gICAgICAzNyxcbiAgICAgIDI0NCxcbiAgICAgIDE2OCxcbiAgICAgIDExMyxcbiAgICAgIDExLFxuICAgICAgMTEzLFxuICAgICAgMjU0LFxuICAgICAgMTIsXG4gICAgICA5MixcbiAgICAgIDEyNCxcbiAgICAgIDIzMyxcbiAgICAgIDE3OSxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc0Wk0yUllFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDExMzk1MDM6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZqB8J2ZvvCdmbMg8J2ZsfCdmb7wnZm+8J2agvCdmoPwnZm48J2ZvfCdmbZcIixcbiAgICBcImxpZFwiOiBcIjI2NjAzMDY2MDE5MDI1ODo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJekN1YXNIRUs2RTJiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZWbG1hanpBanVVK2ZNbGVOMm9zZEZOUlpDNU8zdDduOHA5VUxFMnlTbDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1NuYjZxdjh0L3l5OWZRZExtNEM0aWFnb3JKQzJLNmZrWU50M1dOeGpFOGl6VlRoZHY3WmxRZmh5R0JoOTRzV2M5azFrZUFpVjh3OTY1L0dYZ2tQQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUSsvZm9kUlpPbTc0ei9sRFRnS2JYOWhhOVRBWFMyN3o2MlQ3VDVKelRSbXdwNFY4R0FySmM2K3UrL1lRN2NibjJ1VjZ0OExxT0R4NVNMaEtNaHNTZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQxMTM5NTAzOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMjMzNzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFETDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURMOC5qc29uIjogIntcImtleURhdGFcIjpcImg0UlRhYlAxZTZ2SEpPcnAvOFNGSXU1TlE4ZnB1SURrYjJQanRSUFB4Z0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk3MDE2ODA3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTEyMjU4NDkwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MR ROD",
  ownername:process.env.OWNER_NAME|| "MR ROD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
