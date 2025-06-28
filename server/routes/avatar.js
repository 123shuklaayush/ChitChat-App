const express = require("express");
const router = express.Router();
const multiavatar = require("@multiavatar/multiavatar");

// Generate avatar locally using Multiavatar library
router.get("/:id/:seed?", async (req, res) => {
  const { id, seed } = req.params;
  
  console.log(`Avatar request - ID: ${id}, Seed: ${seed}`);
  
  try {
    // Generate avatar SVG using the library
    const avatarSvg = multiavatar(id, seed ? true : false);
    
    res.set("Content-Type", "image/svg+xml");
    res.send(avatarSvg);
  } catch (error) {
    console.error("Avatar generation error:", error.message);
    res.status(500).json({ error: "Failed to generate avatar", details: error.message });
  }
});

module.exports = router;
