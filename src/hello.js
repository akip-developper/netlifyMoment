import moment from 'moment'

exports.handler = function(event, context, callback){
    callback(null,{
        statusCode:200,
        body: '現在の時間は　' + moment().format()
    })
}
