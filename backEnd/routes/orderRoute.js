const router = require("express").Router();
const orderDb = require("../models/createOrder");
const express = require("express");
const app = express();
const fetchuser = require("../middleware/authentication");

//get orders

router.get("/getOrder", fetchuser, async (req, res) => {
  try {
    const result = await orderDb.find({ user: req.user.id });
    // console.log(result);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//add orders

router.post("/addOrder", fetchuser, async (req, res) => {
  // console.log(req.body);
  // console.log(req.user);

  try {
    const addingNewOrder = new orderDb({
      orderId: req.body.orderId,
      orderTimeDate: req.body.orderTimeDate,
      storeLocation: req.body.storeLocation,
      city: req.body.city,
      storePhone: req.body.storePhone,
      totalItems: req.body.totalItems,
      price: req.body.price,
      status: req.body.status,
      popUp: req.body.popUp,
      user: req.user.id,
    });

    // console.log(addingNewOrder, "Adding order");

    await addingNewOrder.save();

    res.status(200).json({
      data: "saved",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//update order

router.put("/updateOrder/:id", async (req, res) => {
  // console.log(req.body.status, "update order");
  const {
    orderId,
    orderTime,
    storeLocation,
    city,
    storePhone,
    totalItems,
    price,
    status,
  } = req.body;
  const updateorder = {};
  if (orderId) {
    updateorder.orderId = orderId;
  }
  if (orderTime) {
    updateorder.orderTime = orderTime;
  }
  if (storeLocation) {
    updateorder.storeLocation = storeLocation;
  }
  if (city) {
    updateorder.city = city;
  }
  if (storePhone) {
    updateorder.storePhone = storePhone;
  }
  if (totalItems) {
    updateorder.contact = totalItems;
  }
  if (price) {
    updateorder.price = price;
  }
  if (status) {
    updateorder.status = status;
  }

  try {
    orderDb
      .findByIdAndUpdate(
        req.params.id,
        { $set: { updateorder } },
        { new: true }
      )
      .then((data) => {
        return res.status(200).json({ data: data });
      })
      .catch((err) => {
        return res.send("some error");
      });
  } catch (err) {
    res.send("server error");
  }
});

// delete order/cancel order

router.delete("/cancelOrder/:id", fetchuser, async (req, res) => {
  try {
    let updateOrder = await orderDb.findByIdAndDelete(req.params.id);
    res.json({ success: "deleted the file", updateOrder });
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("Error occurred deleting ");
  }
});

module.exports = router;
