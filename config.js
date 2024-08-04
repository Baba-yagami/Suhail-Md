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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_32_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWZIVkVkRm95QnRKNHgzU2h5WnJwNURtanZ5RDRZQXVMcktZamJKUFVYbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnV4d213UENSZmVTX2N6S05wVjRWd1wiLFxuICBcInBob25lSWRcIjogXCJiMzgxODIxNi1lMzE4LTQ2YTgtOTI5My05NjUzMTNhNWY2YWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgMjM0LFxuICAgICAgNzAsXG4gICAgICA4OSxcbiAgICAgIDI0NyxcbiAgICAgIDY3LFxuICAgICAgMjQsXG4gICAgICA0NCxcbiAgICAgIDEwLFxuICAgICAgMTc0LFxuICAgICAgMjExLFxuICAgICAgMjQ1LFxuICAgICAgMTc4LFxuICAgICAgMjAzLFxuICAgICAgMTM3LFxuICAgICAgNSxcbiAgICAgIDExLFxuICAgICAgMTQ4LFxuICAgICAgMjUzLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDY2LFxuICAgICAgMTk0LFxuICAgICAgMzUsXG4gICAgICAxMTMsXG4gICAgICAxMDEsXG4gICAgICAxOCxcbiAgICAgIDkwLFxuICAgICAgOTksXG4gICAgICAxMDgsXG4gICAgICAxNjQsXG4gICAgICAxNDIsXG4gICAgICAxMjUsXG4gICAgICAxNjEsXG4gICAgICAxMzgsXG4gICAgICAxODMsXG4gICAgICAxMTQsXG4gICAgICAyMzcsXG4gICAgICAyNDcsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJYMlJDNzhDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM3ODIwNjY1OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ1OTE0ODI4NDc0MDQ6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHl3cEdBUXhlbTl0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyLzBhN0ZpNnU1U0greU13dkJEN1M1Y3UxSVBLK2h6R0wvQnJGUmVSOWtRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm0yek9Od2h6WDgxUDNKMkdwckdUN0ZCZTRxTkcwVDZGUkZiRzRlU0ZJR0thSFhCdXdmcVZEaGYvR3grTmpHMEczYjA4Y3QycUM1aWN3YmkxQVBCZ0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlTV2I2VGp1NTJVMkkwVVVGU1lGbjRIcmk4bWFzWml5S2Y2RldNTWNrUXhXL0pvN1EyNyt5VnhiMFBBSzBiSnloYjQyMHpUYVlRcEtZeFMvMGI2YUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzc4MjA2NjU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzc4MjA2NjU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3NzQ3MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGd0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ3RS5qc29uIjogIntcImtleURhdGFcIjpcIkVzcXk1amdiOCtUS3ZlTEtadE5uYkI5SHZ2d3c4MlJBUXdUNGN6Z3lXNlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxOTIyNjc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
