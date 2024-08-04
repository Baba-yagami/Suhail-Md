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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a4f6ab194260253a9f46c.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348037820665";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_30_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMNHE5ejU5dzcxaE5FZkhJRWJBeE9tNlg0cEl3OHhGdTJ6cUwyYzJOV09nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzc4MjA2NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4MTM5NEIyOTUwMTIzNjhGM0Y3QTUyNzMxOThDRUM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc4NTQyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlc09LN19sT1MteTRKVnRzaURaOVNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5ZTk5ZWQwLWE2NjUtNGExYy05NTI3LTljOGM0YWVlNjljZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDksXG4gICAgICAxNjAsXG4gICAgICAyNDUsXG4gICAgICA2MyxcbiAgICAgIDU2LFxuICAgICAgMTgzLFxuICAgICAgMzksXG4gICAgICAyMDUsXG4gICAgICAyNDgsXG4gICAgICAxMTUsXG4gICAgICAxNDMsXG4gICAgICAxNzEsXG4gICAgICAxNCxcbiAgICAgIDQzLFxuICAgICAgMjExLFxuICAgICAgNDEsXG4gICAgICAxMDUsXG4gICAgICAxMzcsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAxNTAsXG4gICAgICAxNjIsXG4gICAgICAyNDQsXG4gICAgICAxMjYsXG4gICAgICA4MyxcbiAgICAgIDE2OCxcbiAgICAgIDIwNixcbiAgICAgIDEyMCxcbiAgICAgIDEzOSxcbiAgICAgIDEwMCxcbiAgICAgIDE4NyxcbiAgICAgIDE5MSxcbiAgICAgIDEyMSxcbiAgICAgIDEwMixcbiAgICAgIDIxMCxcbiAgICAgIDk3LFxuICAgICAgNTEsXG4gICAgICAxMTIsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNDZGNVI3U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzNzgyMDY2NToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0NTkxNDgyODQ3NDA0OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Ard3BHQVFoTDIrdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwici8wYTdGaTZ1NVNIK3lNd3ZCRDdTNWN1MUlQSytoekdML0JyRlJlUjlrUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSK0M3Mk9VVi9XNXRnQlRxRkhFc0tYbGl6dzJTZzZkMUt5VFAza3Z4am1RbUNpc2xscEVoUE9PWnBrZ0dyNXRwMFQ5MWdCalFMZHc4Nm5hMDIvRzZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2cUhhYkp5V2c3MUlSR2VyVW1sTFdvQXVscEYvNUp6VWV2b3laS0hDcWFPdE05anMrdThVY2FBa3lpRzU0RU80OGVrRTB0eGtoN21JL2Fxb2lpSkVpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM3ODIwNjY1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzg1NDE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRndNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGd00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyYnRTMVBzT3hPTUkyZXVjNUw2QklTcEFBd1h5OWF2TmtoTGE4NVZLRnVRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTkyMjY4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Douma dono",
  packname: process.env.PACK_NAME || "soka",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Douma",


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
