import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Tooltip, useTheme } from "@mui/material";
// links
const socialLinks = [
  {
    icon: <GitHubIcon fontSize="medium" />,
    href: "https://github.com/Dev-HeshamAli",
    tooltip: "GitHub",
  },
  {
    icon: <LinkedInIcon fontSize="medium" />,
    href: "https://www.linkedin.com/in/heshamalihassan/",
    tooltip: "LinkedIn",
  },
  {
    icon: <FacebookOutlinedIcon fontSize="medium" />,
    href: "https://www.facebook.com/profile.php?id=100026421549171&mibextid=LQQJ4d",
    tooltip: "Facebook",
  },
  {
    icon: <MailIcon fontSize="medium" />,
    href: "mailto:hesahmaloo9@gmail.com",
    tooltip: "Email",
  },

  {
    icon: <WhatsAppIcon fontSize="medium" />,
    href: "http://wa.me/+201228870255",
    tooltip: "WhatsApp",
  },
];
export default function SocialLinksCom() {
  const theme = useTheme();

  const showLinks = socialLinks.map((link, index) => {
    return (
      <Tooltip key={index} title={link.tooltip}>
        <IconButton
          component="a"
          size="large"
          href={link.href}
          target="_blank"
          sx={{
            transition: "0.4s",
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "#e6f2fb",
              borderRadius: "50%",
              color: "rgb(20 184 166)",
            },
            width: "30px",
            height: "30px",
          }}
        >
          {link.icon}
        </IconButton>
      </Tooltip>
    );
  });

  return <>{showLinks}</>;
}
