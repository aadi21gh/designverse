import Design from "../models/Design.js";

// ================= CREATE =================
export const createDesign =
  async (req, res) => {
    try {
      const design =
        await Design.create({
          ...req.body,
          user: req.user._id,
        });

      res.status(201).json(
        design
      );
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };

// ================= GET ALL =================
export const getMyDesigns =
  async (req, res) => {
    try {
      const designs =
        await Design.find({
          user: req.user._id,
        })
          .populate("product")
          .sort({
            updatedAt: -1,
          });

      res.json(designs);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };

// ================= GET ONE =================
export const getDesign =
  async (req, res) => {
    try {
      const design =
        await Design.findById(
          req.params.id
        ).populate("product");

      if (!design) {
        return res.status(404).json({
          message:
            "Design not found",
        });
      }

      res.json(design);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };

// ================= UPDATE =================
export const updateDesign =
  async (req, res) => {
    try {
      const design =
        await Design.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user._id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (!design) {
        return res.status(404).json({
          message:
            "Design not found",
        });
      }

      res.json(design);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };

// ================= DELETE =================
export const deleteDesign =
  async (req, res) => {
    try {
      const design =
        await Design.findOneAndDelete({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!design) {
        return res.status(404).json({
          message:
            "Design not found",
        });
      }

      res.json({
        message:
          "Design Deleted",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };