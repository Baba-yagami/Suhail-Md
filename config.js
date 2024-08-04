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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_39_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMeE9wR3VQK0FFU2dKZ1hxYVY3NkQyc01WTHFkejBJVUNQYXVlb0lvdURjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZV09mcGY0VFM1U2tkWmJoRDBHVXB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0ZjZiM2M3LWQwOWQtNDllMS04ODI3LWFjMjY0YjA1YTg0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyNTUsXG4gICAgICAyNDUsXG4gICAgICA4OSxcbiAgICAgIDM1LFxuICAgICAgMjA5LFxuICAgICAgMTEwLFxuICAgICAgMTQwLFxuICAgICAgODAsXG4gICAgICAyMjUsXG4gICAgICAxNzQsXG4gICAgICA5MCxcbiAgICAgIDkyLFxuICAgICAgMTExLFxuICAgICAgMTkwLFxuICAgICAgNTcsXG4gICAgICAxNDgsXG4gICAgICAxMzgsXG4gICAgICAzNixcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAzNixcbiAgICAgIDEwNixcbiAgICAgIDE0MSxcbiAgICAgIDk2LFxuICAgICAgMTcwLFxuICAgICAgMTMyLFxuICAgICAgNCxcbiAgICAgIDIyOCxcbiAgICAgIDIsXG4gICAgICAyOCxcbiAgICAgIDE0NSxcbiAgICAgIDEwNSxcbiAgICAgIDI0NyxcbiAgICAgIDIzOSxcbiAgICAgIDgxLFxuICAgICAgOTksXG4gICAgICAxMTgsXG4gICAgICAxNTAsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkRHOFBHNEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzc4MjA2NjU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNDU5MTQ4Mjg0NzQwNDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZXdwR0FRNWJTOXRRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIvMGE3Rmk2dTVTSCt5TXd2QkQ3UzVjdTFJUEsraHpHTC9CckZSZVI5a1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSy9NMGJFc1NZQm43SXZYK3BFMllvbmR6NDV2OVZ4WVFZVjEwa1doSnZqTTQ0bEd2MFRUb2V5ZzhmcHVhQmNFRnhwSStqd1loL01jWk8rTWtVTGMxQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHRHV1N0YXAzKzZQbDFWSnQ5RHFqdHhiM0JEcFlBV0srTm0vOTdEQUZjSm94cTVoUmVDYWl1Z0V6bVZwSGc3djNCbGlhWTg5d09UQWNEOThrNTZraWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzNzgyMDY2NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc2Nzk3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ3RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRndELmpzb24iOiAie1wia2V5RGF0YVwiOlwiK1JubE1pNGtFVG5OTitsc3ZZc2FTUGp5VFEvVDJ2VEtxMXZMRTdxVWw4cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE5MjI2NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjc2NDc3ODk4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
