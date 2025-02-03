const Message = require("../models/Message")

exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content, orderId, attachments } = req.body
    const newMessage = new Message({
      sender: req.user.id,
      receiver: receiverId,
      content,
      order: orderId,
      attachments,
    })

    const message = await newMessage.save()
    res.json(message)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: req.params.userId },
        { sender: req.params.userId, receiver: req.user.id },
      ],
    }).sort({ createdAt: 1 })
    res.json(messages)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
}

