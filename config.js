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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_23_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEdnJDNlVENDBYMHdnSHVHTnRJVlZOeGZ1N2FLbmU5dm1CRHBtQndmOVZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoM2Fhem9Gb1ItZUhfbjhDOW5nd3hRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZiODMwODNjLWI0NDQtNGRmNS1hODFlLTVlMzZmMjBmYzQ0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDQwLFxuICAgICAgMTQsXG4gICAgICA1NixcbiAgICAgIDIwNixcbiAgICAgIDEwOSxcbiAgICAgIDI0NCxcbiAgICAgIDE2MyxcbiAgICAgIDE1NyxcbiAgICAgIDg2LFxuICAgICAgMjE5LFxuICAgICAgMTEwLFxuICAgICAgMTgzLFxuICAgICAgMTQ2LFxuICAgICAgMTQ0LFxuICAgICAgMjI5LFxuICAgICAgNTAsXG4gICAgICA1NixcbiAgICAgIDE4NSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxOTEsXG4gICAgICAyMzEsXG4gICAgICA2OSxcbiAgICAgIDE5NyxcbiAgICAgIDI0OCxcbiAgICAgIDEyNCxcbiAgICAgIDU0LFxuICAgICAgMyxcbiAgICAgIDQ0LFxuICAgICAgMjU1LFxuICAgICAgMzEsXG4gICAgICA1MSxcbiAgICAgIDI2LFxuICAgICAgMTY5LFxuICAgICAgMTEwLFxuICAgICAgMTYwLFxuICAgICAgMjQyLFxuICAgICAgODMsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBVk5LTjM1U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzNzgyMDY2NToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0NTkxNDgyODQ3NDA0OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B5d3BHQVF2cDIrdFFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwici8wYTdGaTZ1NVNIK3lNd3ZCRDdTNWN1MUlQSytoekdML0JyRlJlUjlrUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaQVpJTlVkMGVjQWxqYVF6VXludCtHYzFjYUhuSks3RzVPeXdSMndIRzJFTXF6ZWh6MjBiQTZnRmgzQzVUZzVaSHh1bjkzWjF3M09PL1ZoaVdObTlEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTdFF1bzB6OG1PT3RXY0VaeG1jOTFPSlkxNW01aWdlT0VNQUQzdHRGaGdNTyttcGV3N3lZckgwdngzNXNVRWdwR3NWcjcvUHFhZUpZcWVmU0RiSTRqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM3ODIwNjY1OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzgxMzc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "‡",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Douma Dono",
  packname: process.env.PACK_NAME || "DOUSHITA DOUSHITA",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "DOUMA SAMA",


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
