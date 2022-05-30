
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
  
  shippingInfo: {
        userAddress: {    // shipping info
          type: String,
        },
        storeAddress: {
          type: String,
        },
        storephone: {
          type: Number,
        },
      },
      totalPrice:{     // price info
        type:Number
      },
      totalItems:{
        type:Number
      },

      orderItems:[     //  Order details
        {
          name: {
            type: String,
          },
          subprice: {
            type: Number,
          },
          quantity: {
            type: Number,
          },
          price: {
            type: Number,
          },
          washprice: {
            type: Number,
          },  
        
        washes:[           //    wases, details of customer
            {
                name: {
                    type: String,
                  },
                price:{
                    type: Number,
                },imgNormal: {            
                  type: String,
                },imgBlue: {
                  type: String,
                },
                id:{            //   Order id 
                  type: Number,
              },
                
            }
        ]
    }

      ],
      createdAt: {
        type: Date,
        default: Date.now,}
      
    });
    
  const  Orders = mongoose.model("Order", ordersSchema);
  module.exports = Orders;



