var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')
var rows = require('./data.json')


var dimensions = [
  {title: 'Host', value: 'hostname'},
]
var reduce = function(row, memo) {
  memo.count = (memo.count || 0) + 1
  memo.date = row.date
  // memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
  return memo
}
var calculations = [
    // "value" can be the key of the "memo" object from reduce
    // "template" changes the display of the value, but not sorting behavior
    {
      title: 'Date',
      value: function(memo) { return memo.date },
      template: function(val, row) { return val },
    },
    {
      title: 'Count',
      value: function(memo) { return memo.count },
      template: function(val, row) { return val },
    }
  ]
// var calculations = [
//   {
//     title: 'Date', value: 'date',
//     template: function(val, row) {
//       return val
//     }
//   }
// ]
module.exports = createReactClass({
  render () {
    return (
      <ReactPivot rows={rows}
            dimensions={dimensions}
             reduce={reduce}
             calculations={calculations}
             nPaginateRows={10} />
    )
  }
})
