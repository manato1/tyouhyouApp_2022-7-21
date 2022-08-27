// 3桁カンマ区切りとする.
function comma(num) {
    return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
let from = document.getElementById('from').value;
let fore = document.getElementById('for').value;
let date = document.getElementById('date').value;
let deadline = document.getElementById('deadline').value;
let subject = document.getElementById('subject').value;
let remarks = document.getElementById('remarks').value;
let number = document.getElementById('number').value;

let content_1 = document.getElementById('content_1').value
let content_2 = document.getElementById('content_2').value
let content_3 = document.getElementById('content_3').value
let content_4 = document.getElementById('content_4').value
let content_5 = document.getElementById('content_5').value
let content_6 = document.getElementById('content_6').value
let content_7 = document.getElementById('content_7').value
let content_8 = document.getElementById('content_8').value
let content_9 = document.getElementById('content_9').value
let content_10 = document.getElementById('content_10').value
let content_11 = document.getElementById('content_11').value
let content_12 = document.getElementById('content_12').value
let content_13 = document.getElementById('content_13').value
let content_14 = document.getElementById('content_14').value
let content_15 = document.getElementById('content_15').value
let content_16 = document.getElementById('content_16').value
let content_17 = document.getElementById('content_17').value
let content_18 = document.getElementById('content_18').value

let unit_price_1 = document.getElementById('unit_price_1').value
let unit_price_2 = document.getElementById('unit_price_2').value
let unit_price_3 = document.getElementById('unit_price_3').value
let unit_price_4 = document.getElementById('unit_price_4').value
let unit_price_5 = document.getElementById('unit_price_5').value
let unit_price_6 = document.getElementById('unit_price_6').value
let unit_price_7 = document.getElementById('unit_price_7').value
let unit_price_8 = document.getElementById('unit_price_8').value
let unit_price_9 = document.getElementById('unit_price_9').value
let unit_price_10 = document.getElementById('unit_price_10').value
let unit_price_11 = document.getElementById('unit_price_11').value
let unit_price_12 = document.getElementById('unit_price_12').value
let unit_price_13 = document.getElementById('unit_price_13').value
let unit_price_14 = document.getElementById('unit_price_14').value
let unit_price_15 = document.getElementById('unit_price_15').value
let unit_price_16 = document.getElementById('unit_price_16').value
let unit_price_17 = document.getElementById('unit_price_17').value
let unit_price_18 = document.getElementById('unit_price_18').value

let quantity_1 = document.getElementById('quantity_1').value
let quantity_2 = document.getElementById('quantity_2').value
let quantity_3 = document.getElementById('quantity_3').value
let quantity_4 = document.getElementById('quantity_4').value
let quantity_5 = document.getElementById('quantity_5').value
let quantity_6 = document.getElementById('quantity_6').value
let quantity_7 = document.getElementById('quantity_7').value
let quantity_8 = document.getElementById('quantity_8').value
let quantity_9 = document.getElementById('quantity_9').value
let quantity_10 = document.getElementById('quantity_10').value
let quantity_11 = document.getElementById('quantity_11').value
let quantity_12 = document.getElementById('quantity_12').value
let quantity_13 = document.getElementById('quantity_13').value
let quantity_14 = document.getElementById('quantity_14').value
let quantity_15 = document.getElementById('quantity_15').value
let quantity_16 = document.getElementById('quantity_16').value
let quantity_17 = document.getElementById('quantity_17').value
let quantity_18 = document.getElementById('quantity_18').value

let rate_1 = document.getElementById('rate_1').value;
let rate_2 = document.getElementById('rate_2').value
let rate_3 = document.getElementById('rate_3').value
let rate_4 = document.getElementById('rate_4').value
let rate_5 = document.getElementById('rate_5').value
let rate_6 = document.getElementById('rate_6').value
let rate_7 = document.getElementById('rate_7').value
let rate_8 = document.getElementById('rate_8').value
let rate_9 = document.getElementById('rate_9').value
let rate_10 = document.getElementById('rate_10').value
let rate_11 = document.getElementById('rate_11').value
let rate_12 = document.getElementById('rate_12').value
let rate_13 = document.getElementById('rate_13').value
let rate_14 = document.getElementById('rate_14').value
let rate_15 = document.getElementById('rate_15').value
let rate_16 = document.getElementById('rate_16').value
let rate_17 = document.getElementById('rate_17').value
let rate_18 = document.getElementById('rate_18').value


var vue = new Vue({
    el:"#form",
    // データを定義
    data:{
        from: from,
        For: fore,
        date: date,
        deadline: deadline,
        subject: subject,
        number: number,
        remarks: remarks,
        
        content_1: "",
        unit_price_1: "",
        quantity_1:"",
        rate_1:"",

        content_2:"",
        unit_price_2:"",
        quantity_2:"",
        rate_2:"",

        content_3:"",
        unit_price_3:"",
        quantity_3:"",
        rate_3:"",

        content_4:"",
        unit_price_4:"",
        quantity_4:"",
        rate_4:"",

        content_5:"",
        unit_price_5:"",
        quantity_5:"",
        rate_5:"",

        content_6:"",
        unit_price_6:"",
        quantity_6:"",
        rate_6:"",

        content_7:"",
        unit_price_7:"",
        quantity_7:"",
        rate_7:"",

        content_8:"",
        unit_price_8:"",
        quantity_8:"",
        rate_8:"",

        content_9:"",
        unit_price_9:"",
        quantity_9:"",
        rate_9:"",

        content_10:"",
        unit_price_10:"",
        quantity_10:"",
        rate_10:"",

        content_11:"",
        unit_price_11:"",
        quantity_11:"",
        rate_11:"",

        content_12:"",
        unit_price_12:"",
        quantity_12:"",
        rate_12:"",

        content_13:"",
        unit_price_13:"",
        quantity_13:"",
        rate_13:"",
     
        content_14:"",
        unit_price_14:"",
        quantity_14:"",
        rate_14:"",

        content_15:"",
        unit_price_15:"",
        quantity_15:"",
        rate_15:"",

        content_16:"",
        unit_price_16:"",
        quantity_16:"",
        rate_16:"",

        content_17:"",
        unit_price_17:"",
        quantity_17:"",
        rate_17:"",

        content_18:"",
        unit_price_18:"",
        quantity_18:"",
        rate_18:"",


        total1:"",
        total2:"",
        total3:"",
        total4:"",
        total5:"",
        total6:"",
        total7:"",
        total8:"",
        total9:"",
        total10:"",
        total11:"",
        total12:"",
        total13:"",
        total14:"",
        total15:"",
        total16:"",
        total17:"",
        total18:"",

        totalamount:"",
        subtotal:"",
        taxamount:"",

    },
    // dataを表示
    computed:{
        From:function(){
            return this.from.replace(/ |　/g,'\n')
        },
        FOr:function(){
            return this.For.replace(/ |　/g,'\n')
        },
        Date:function(){
            return this.date
        },
        Deadline:function(){
            return this.deadline
        },
        Subject:function(){
            return this.subject
        },
        Number:function(){
            return this.number
        },
        Remarks:function(){
            return this.remarks
        },
        Content1:function(){
            return this.content_1
        },
        Content2:function(){
            return this.content_2
        },
        Content3:function(){
            return this.content_3
        },
        Content4:function(){
            return this.content_4
        },
        Content5:function(){
            return this.content_5
        },
        Content6:function(){
            return this.content_6
        },
        Content7:function(){
            return this.content_7
        },
        Content8:function(){
            return this.content_8
        },
        Content9:function(){
            return this.content_9
        },
        Content10:function(){
            return this.content_10
        },
        Content11:function(){
            return this.content_11
        },
        Content12:function(){
            return this.content_12
        },
        Content13:function(){
            return this.content_13
        },
        Content14:function(){
            return this.content_14
        },
        Content15:function(){
            return this.content_15
        },
        Content16:function(){
            return this.content_16
        },
        Content17:function(){
            return this.content_17
        },
        Content18:function(){
            return this.content_18
        },

        Unit_price1:function(){
            if(this.unit_price_1){
                return comma(this.unit_price_1)
            }
            return this.unit_price_1
        },
        Unit_price2:function(){
            if(this.unit_price_2){
                return comma(this.unit_price_2)
            }
            return this.unit_price_2
        },
        Unit_price3:function(){
            if(this.unit_price_3){
                return comma(this.unit_price_3)
            }
            return this.unit_price_3
        },
        Unit_price4:function(){
            if(this.unit_price_4){
                return comma(this.unit_price_4)
            }
            return this.unit_price_4
        },
        Unit_price5:function(){
            if(this.unit_price_5){
                return comma(this.unit_price_5)
            }
            return this.unit_price_5
        },
        Unit_price6:function(){
            if(this.unit_price_6){
                return comma(this.unit_price_6)
            }
            return this.unit_price_6
        },
        Unit_price7:function(){
            if(this.unit_price_7){
                return comma(this.unit_price_7)
            }
            return this.unit_price_7
        },
        Unit_price8:function(){
            if(this.unit_price_8){
                return comma(this.unit_price_8)
            }
            return this.unit_price_8
        },
        Unit_price9:function(){
            if(this.unit_price_9){
                return comma(this.unit_price_9)
            }
            return this.unit_price_9
        },
        Unit_price10:function(){
            if(this.unit_price_10){
                return comma(this.unit_price_10)
            }
            return this.unit_price_10
        },
        Unit_price11:function(){
            if(this.unit_price_11){
                return comma(this.unit_price_11)
            }
            return this.unit_price_11
        },
        Unit_price12:function(){
            if(this.unit_price_12){
                return comma(this.unit_price_12)
            }
            return this.unit_price_12
        },
        Unit_price13:function(){
            if(this.unit_price_13){
                return comma(this.unit_price_13)
            }
            return this.unit_price_13
        },
        Unit_price14:function(){
            if(this.unit_price_14){
                return comma(this.unit_price_14)
            }
            return this.unit_price_14
        },
        Unit_price15:function(){
            if(this.unit_price_15){
                return comma(this.unit_price_15)
            }
            return this.unit_price_15
        },
        Unit_price16:function(){
            if(this.unit_price_16){
                return comma(this.unit_price_16)
            }
            return this.unit_price_16
        },
        Unit_price17:function(){
            if(this.unit_price_17){
                return comma(this.unit_price_17)
            }
            return this.unit_price_17
        },
        Unit_price18:function(){
            if(this.unit_price_18){
                return comma(this.unit_price_18)
            }
            return this.unit_price_18
        },


        Quantity1:function(){
            return this.quantity_1
        },
        Quantity2:function(){
            return this.quantity_2
        },
        Quantity3:function(){
            return this.quantity_3
        },
        Quantity4:function(){
            return this.quantity_4
        },
        Quantity5:function(){
            return this.quantity_5
        },
        Quantity6:function(){
            return this.quantity_6
        },
        Quantity7:function(){
            return this.quantity_7
        },
        Quantity8:function(){
            return this.quantity_8
        },
        Quantity9:function(){
            return this.quantity_9
        },
        Quantity10:function(){
            return this.quantity_10
        },
        Quantity11:function(){
            return this.quantity_11
        },
        Quantity12:function(){
            return this.quantity_12
        },
        Quantity13:function(){
            return this.quantity_13
        },
        Quantity14:function(){
            return this.quantity_14
        },
        Quantity15:function(){
            return this.quantity_15
        },
        Quantity16:function(){
            return this.quantity_16
        },
        Quantity17:function(){
            return this.quantity_17
        },
        Quantity18:function(){
            return this.quantity_18
        },


        Rate1:function(){
            return this.rate_1
        },
        Rate2:function(){
            return this.rate_2
        },
        Rate3:function(){
            return this.rate_3
        },
        Rate4:function(){
            return this.rate_4
        },
        Rate5:function(){
            return this.rate_5
        },
        Rate6:function(){
            return this.rate_6
        },
        Rate7:function(){
            return this.rate_7
        },
        Rate8:function(){
            return this.rate_8
        },
        Rate9:function(){
            return this.rate_9
        },
        Rate10:function(){
            return this.rate_10
        },
        Rate11:function(){
            return this.rate_11
        },
        Rate12:function(){
            return this.rate_12
        },
        Rate13:function(){
            return this.rate_13
        },
        Rate14:function(){
            return this.rate_14
        },
        Rate15:function(){
            return this.rate_15
        },
        Rate16:function(){
            return this.rate_16
        },
        Rate17:function(){
            return this.rate_17
        },
        Rate18:function(){
            return this.rate_18
        },

        Total1:function(){
            if(this.total1){return comma(parseInt(this.total1))}
            return this.total1
        },
        Total2:function(){
            if(this.total2){return comma(parseInt(this.total2))}
            return this.total2
        },
        Total3:function(){
            if(this.total3){return comma(parseInt(this.total3))}
            return this.total3
        },
        Total4:function(){
            if(this.total4){return comma(parseInt(this.total4))}
            return this.total4
        },
        Total5:function(){
            if(this.total5){return comma(parseInt(this.total5))}
            return this.total5
        },
        Total6:function(){
            if(this.total6){return comma(parseInt(this.total6))}
            return this.total6
        },
        Total7:function(){
            if(this.total7){return comma(parseInt(this.total7))}
            return this.total7
        },
        Total8:function(){
            if(this.total8){return comma(parseInt(this.total8))}
            return this.total8
        },
        Total9:function(){
            if(this.total9){return comma(parseInt(this.total9))}
            return this.total9
        },
        Total10:function(){
            if(this.total10){return comma(parseInt(this.total10))}
            return this.total10
        },
        Total11:function(){
            if(this.total11){return comma(parseInt(this.total11))}
            return this.total11
        },
        Total12:function(){
            if(this.total12){return comma(parseInt(this.total12))}
            return this.total12
        },
        Total13:function(){
            if(this.total13){return comma(parseInt(this.total13))}
            return this.total13
        },
        Total14:function(){
            if(this.total14){return comma(parseInt(this.total14))}
            return this.total14
        },
        Total15:function(){
            if(this.total15){return comma(parseInt(this.total15))}
            return this.total15
        },
        Total16:function(){
            if(this.total16){return comma(parseInt(this.total16))}
            return this.total16
        },
        Total17:function(){
            if(this.total17){return comma(parseInt(this.total17))}
            return this.total17
        },
        Total18:function(){
            if(this.total18){return comma(parseInt(this.total18))}
            return this.total18
        },

        Subtotal:function(){
            return "￥" + comma(parseInt(this.subtotal));
        },
        TaxAmount:function(){
            return "￥" + comma(parseInt(this.taxamount))
        },
        TotalAmount:function(){
            if(this.totalamount){
                return "￥" + comma(parseInt(this.totalamount))

            }else{
                return "￥" + 0
            }
        },

    },        
    // データによって処理・データを操作

    watch:{

        content_1:function(){
            if(this.content_1 && !unit_price_1){
                this.quantity_1 = "1";
                this.rate_1 = "10";
                this.total1 = this.unit_price_1 * this.quantity_1 * (this.rate_1 /100 + 1)
            }else if(!this.content_1){
                this.quantity_1 = "";
                this.rate_1 = "";
                this.unit_price_1 = ""
                this.total1 = "";
            }else{
                this.quantity_1 = quantity_1;
                this.rate_1 = rate_1;
                this.unit_price_1 = unit_price_1;
                this.total1 = this.unit_price_1 * this.quantity_1 * (this.rate_1 /100 + 1)
            }
        },
        content_2:function(){
            if(this.content_2 && !unit_price_2){
                this.quantity_2 = "1";
                this.rate_2 = "10";
                this.total2 = this.unit_price_2 * this.quantity_2 * (this.rate_2 /100 + 1)
            }else if(!this.content_2){
                this.quantity_2 = "";
                this.rate_2 = "";
                this.unit_price_2 = ""
                this.total2 = "";
            }else{
                this.quantity_2 = quantity_2;
                this.rate_2 = rate_2
                this.total2 = this.unit_price_2 * this.quantity_2 * (this.rate_2 /100 + 1);
                this.unit_price_2 = unit_price_2
            }
        },
        content_3:function(){
            if(this.content_3 && !unit_price_3){
                this.quantity_3 = 1;
                this.rate_3 = 10;
                this.total3 = this.unit_price_3 * this.quantity_3 * (this.rate_3 /100 + 1)
            }else if(!this.content_3){
                this.quantity_3 = "";
                this.rate_3 = "";
                this.unit_price_3 = ""
                this.total3 = "";
            }else{
                this.quantity_3 = quantity_3;
                this.rate_3 = rate_3
                this.total3 = this.unit_price_3 * this.quantity_3 * (this.rate_3 /100 + 1)
                this.unit_price_3 = unit_price_3
            }
        },
        content_4:function(){
            if(this.content_4 && !unit_price_4){
                this.quantity_4 = 1;
                this.rate_4 = 10;
                this.total4 = this.unit_price_4 * this.quantity_4 * (this.rate_4 /100 + 1)
            }else if(!this.content_4){
                this.quantity_4 = "";
                this.rate_4 = "";
                this.unit_price_4 = ""
                this.total4 = "";
            }else{
                this.quantity_4 = quantity_4;
                this.rate_4 = rate_4
                this.total4 = this.unit_price_4 * this.quantity_4 * (this.rate_4 /100 + 1)
                this.unit_price_4 = unit_price_4
            }
        },
        content_5:function(){
            if(this.content_5 && !unit_price_5){
                this.quantity_5 = 1;
                this.rate_5 = 10;
                this.total5 = this.unit_price_5 * this.quantity_5 * (this.rate_5 /100 + 1)
            }else if(!this.content_5){
                this.quantity_5 = "";
                this.rate_5 = "";
                this.unit_price_5 = ""
                this.total5 = "";
            }else{
                this.quantity_5 = quantity_5;
                this.rate_5 = rate_5
                this.total5 = this.unit_price_5 * this.quantity_5 * (this.rate_5 /100 + 1)
                this.unit_price_5 = unit_price_5
            }
        },
        content_6:function(){
            if(this.content_6 && !unit_price_6){
                this.quantity_6 = 1;
                this.rate_6 = 10;
                this.total6 = this.unit_price_6 * this.quantity_6 * (this.rate_6 /100 + 1)
            }else if(!this.content_6){
                this.quantity_6 = "";
                this.rate_6 = "";
                this.unit_price_6 = ""
                this.total6 = "";
            }else{
                this.quantity_6 = quantity_6;
                this.rate_6 = rate_6
                this.total6 = this.unit_price_6 * this.quantity_6 * (this.rate_6 /100 + 1)
                this.unit_price_6 = unit_price_6
            }
        },
        content_7:function(){
            if(this.content_7 && !unit_price_7){
                this.quantity_7 = 1;
                this.rate_7 = 10;
                this.total7 = this.unit_price_7 * this.quantity_7 * (this.rate_7 /100 + 1)
            }else if(!this.content_7){
                this.quantity_7 = "";
                this.rate_7 = "";
                this.unit_price_7 = ""
                this.total7 = "";
            }else{
                this.quantity_7 = quantity_7;
                this.rate_7 = rate_7
                this.total7 = this.unit_price_7 * this.quantity_7 * (this.rate_7 /100 + 1)
                this.unit_price_7 = unit_price_7
            }
        },
        content_8:function(){
            if(this.content_8 && !unit_price_8){
                this.quantity_8 = 1;
                this.rate_8 = 10;
                this.total8 = this.unit_price_8 * this.quantity_8 * (this.rate_8 /100 + 1)
            }else if(!this.content_8){
                this.quantity_8 = "";
                this.rate_8 = "";
                this.unit_price_8 = ""
                this.total8 = "";
            }else{
                this.quantity_8 = quantity_8;
                this.rate_8 = vrate_8;
                this.total8 = this.unit_price_8 * this.quantity_8 * (this.rate_8 /100 + 1)
                this.unit_price_8 = unit_price_8
            }
        },
        content_9:function(){
            if(this.content_9 && !unit_price_9){
                this.quantity_9 = 1;
                this.rate_9 = 10;
                this.total9 = this.unit_price_9 * this.quantity_9 * (this.rate_9 /100 + 1)
            }else if(!this.content_9){
                this.quantity_9 = "";
                this.rate_9 = "";
                this.unit_price_9 = ""
                this.total9 = "";
            }else{
                this.quantity_9 = quantity_9;
                this.rate_9 = rate_9
                this.total9 = this.unit_price_9 * this.quantity_9 * (this.rate_9 /100 + 1)
                this.unit_price_9 = unit_price_9
            }
        },
        content_10:function(){
            if(this.content_10 && !unit_price_10){
                this.quantity_10 = 1;
                this.rate_10 = 10;
                this.total10 = this.unit_price_10 * this.quantity_10 * (this.rate_10 /100 + 1)
            }else if(!this.content_10){
                this.quantity_10 = "";
                this.rate_10 = "";
                this.unit_price_10 = ""
                this.total10 = "";
            }else{
                this.quantity_10 = quantity_10;
                this.rate_10 = rate_10
                this.total10 = this.unit_price_10 * this.quantity_10 * (this.rate_10 /100 + 1)
                this.unit_price_10 = unit_price_10
            }
        },
        content_11:function(){
            if(this.content_11 && !unit_price_11){
                this.quantity_11 = 1;
                this.rate_11 = 10;
                this.total11 = this.unit_price_11 * this.quantity_11 * (this.rate_11 /100 + 1)
            }else if(!this.content_11){
                this.quantity_11 = "";
                this.rate_11 = "";
                this.unit_price_11 = ""
                this.total11 = "";
            }else{
                this.quantity_11 = quantity_11;
                this.rate_11 = rate_11
                this.total11 = this.unit_price_11 * this.quantity_11 * (this.rate_11 /100 + 1)
                this.unit_price_11 = unit_price_11
            }
        },
        content_12:function(){
            if(this.content_12 && !unit_price_12){
                this.quantity_12 = 1;
                this.rate_12 = 10;
                this.total12 = this.unit_price_12 * this.quantity_12 * (this.rate_12 /100 + 1)
            }else if(!this.content_12){
                this.quantity_12 = "";
                this.rate_12 = "";
                this.unit_price_12 = ""
                this.total12 = "";
            }else{
                this.quantity_12 = quantity_12;
                this.rate_12 = rate_12
                this.total12 = this.unit_price_12 * this.quantity_12 * (this.rate_12 /100 + 1)
                this.unit_price_12 = unit_price_12
            }
        },
        content_13:function(){
            if(this.content_13 && !unit_price_13){
                this.quantity_13 = 1;
                this.rate_13 = 10;
                this.total13 = this.unit_price_13 * this.quantity_13 * (this.rate_13 /100 + 1)
            }else if(!this.content_13){
                this.quantity_13 = "";
                this.rate_13 = "";
                this.unit_price_13 = ""
                this.total13 = "";
            }else{
                this.quantity_13 = quantity_13;
                this.rate_13 = rate_13
                this.total13 = this.unit_price_13 * this.quantity_13 * (this.rate_13 /100 + 1)
                this.unit_price_13 = unit_price_13
            }
        },
        content_14:function(){
            if(this.content_14 && !unit_price_14){
                this.quantity_14 = 1;
                this.rate_14 = 10;
                this.total14 = this.unit_price_14 * this.quantity_14 * (this.rate_14 /100 + 1)
            }else if(!this.content_14){
                this.quantity_14 = "";
                this.rate_14 = "";
                this.unit_price_14 = ""
                this.total14 = "";
            }else{
                this.quantity_14 = quantity_14;
                this.rate_14 = rate_14
                this.total14 = this.unit_price_14 * this.quantity_14 * (this.rate_14 /100 + 1)
                this.unit_price_14 = unit_price_14
            }
        },
        content_15:function(){
            if(this.content_15 && !unit_price_15){
                this.quantity_15 = 1;
                this.rate_15 = 10;
                this.total15 = this.unit_price_15 * this.quantity_15 * (this.rate_15 /100 + 1)
            }else if(!this.content_15){
                this.quantity_15 = "";
                this.rate_15 = "";
                this.unit_price_15 = ""
                this.total15 = "";
            }else{
                this.quantity_15 = quantity_15;
                this.rate_15 = rate_15
                this.total15 = this.unit_price_15 * this.quantity_15 * (this.rate_15 /100 + 1)
                this.unit_price_15 = unit_price_15
            }
        },
        content_16:function(){
            if(this.content_16 && !unit_price_16){
                this.quantity_16 = 1;
                this.rate_16 = 10;
                this.total16 = this.unit_price_16 * this.quantity_16 * (this.rate_16 /100 + 1)
            }else if(!this.content_16){
                this.quantity_16 = "";
                this.rate_16 = "";
                this.unit_price_16 = ""
                this.total16 = "";
            }else{
                this.quantity_16 = quantity_16;
                this.rate_16 = rate_16
                this.total16 = this.unit_price_16 * this.quantity_16 * (this.rate_16 /100 + 1)
                this.unit_price_16 = unit_price_16
            }
        },
        content_17:function(){
            if(this.content_1 && !unit_price_17){
                this.quantity_17 = 1;
                this.rate_17 = 10;
                this.total17 = this.unit_price_17 * this.quantity_17 * (this.rate_17 /100 + 1)
            }else if(!this.content_17){
                this.quantity_17 = "";
                this.rate_17 = "";
                this.unit_price_17 = ""
                this.total17 = "";
            }else{
                this.quantity_17 = quantity_17;
                this.rate_17 = rate_17
                this.total17 = this.unit_price_17 * this.quantity_17 * (this.rate_17 /100 + 1)
                this.unit_price_17 = unit_price_17
            }
        },
        content_18:function(){
            if(this.content_18 && !unit_price_18){
                this.quantity_18 = 1;
                this.rate_18 = 10;
                this.total18 = this.unit_price_18 * this.quantity_18 * (this.rate_18 /100 + 1)
            }else if(!this.content_18){
                this.quantity_18 = "";
                this.rate_18 = "";
                this.unit_price_18 = ""
                this.total18 = "";
            }else{
                this.quantity_18 = quantity_18;
                this.rate_18 = rate_18
                this.total18 = this.unit_price_18 * this.quantity_18 * (this.rate_18 /100 + 1)
                this.unit_price_18 = unit_price_18
            }
        },

        unit_price_1:function(newData,oldData){
            this.total1 = newData * this.quantity_1 * (this.rate_1 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;
            if(!this.unit_price_1){
                this.total1 = "";
            }
        },
        unit_price_2:function(newData,oldData){
            this.total2 = newData * this.quantity_2 * (this.rate_2 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_2){
                this.total2 = "";
            }
        },
        unit_price_3:function(newData,oldData){
            this.total3 = newData * this.quantity_3 * (this.rate_3 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_3){
                this.total3 = "";
            }
        },
        unit_price_4:function(newData,oldData){
            this.total4 = newData * this.quantity_4 * (this.rate_4 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_4){
                this.total4 = "";
            }

        },
        unit_price_5:function(newData,oldData){
            this.total5 = newData * this.quantity_5 * (this.rate_5 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_5){
                this.total5 = "";
            }
        },
        unit_price_6:function(newData,oldData){
            this.total6 = newData * this.quantity_6 * (this.rate_6 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_6){
                this.total6 = "";
            }
        },
        unit_price_7:function(newData,oldData){
            this.total7 = newData * this.quantity_7 * (this.rate_7 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_7){
                this.total7 = "";
            }
        },
        unit_price_8:function(newData,oldData){
            this.total8 = newData * this.quantity_8 * (this.rate_8 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_8){
                this.total8 = "";
            }
        },
        unit_price_9:function(newData,oldData){
            this.total9 = newData * this.quantity_9 * (this.rate_9 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_9){
                this.total9 = "";
            }
        },
        unit_price_10:function(newData,oldData){
            this.total10 = newData * this.quantity_10 * (this.rate_10 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_10){
                this.total10 = "";
            }
        },
        unit_price_11:function(newData,oldData){
            this.total11 = newData * this.quantity_11 * (this.rate_11 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_11){
                this.total11 = "";
            }
        },
        unit_price_12:function(newData,oldData){
            this.total12 = newData * this.quantity_12 * (this.rate_12 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_12){
                this.total12 = "";
            }
        },
        unit_price_13:function(newData,oldData){
            this.total13 = newData * this.quantity_13 * (this.rate_13 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_13){
                this.total13 = "";
            }
        },
        unit_price_14:function(newData,oldData){
            this.total14 = newData * this.quantity_14 * (this.rate_14 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_14){
                this.total14 = "";
            }
        },
        unit_price_15:function(newData,oldData){
            this.total15 = newData * this.quantity_15 * (this.rate_15 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_15){
                this.total15 = "";
            }
        },
        unit_price_16:function(newData,oldData){
            this.total16 = newData * this.quantity_16 * (this.rate_16 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_16){
                this.total16 = "";
            }
        },
        unit_price_17:function(newData,oldData){
            this.total17 = newData * this.quantity_17 * (this.rate_17 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_17){
                this.total17 = "";
            }
        },
        unit_price_18:function(newData,oldData){
            this.total18 = newData * this.quantity_18 * (this.rate_18 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.unit_price_18){
                this.total18 = "";
            }
        },

        quantity_1:function(newData){
            this.total1 = this.unit_price_1 * newData * (this.rate_1 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_1){
                this.total1 = "";
            }

        },
        quantity_2:function(newData){
            this.total2 = this.unit_price_2 * newData * (this.rate_2 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_2){
                this.total2 = "";
            }    
        },
        quantity_3:function(newData){
            this.total3 = this.unit_price_3 * newData * (this.rate_3 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_3){
                this.total3 = "";
            }    
        },
        quantity_4:function(newData){
            this.total = this.unit_price_4 * newData * (this.rate_4 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_4){
                this.total4 = "";
            }    
        },
        quantity_5:function(newData){
            this.total5 = this.unit_price_5 * newData * (this.rate_5 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_5){
                this.total5 = "";
            }    
        },
        quantity_6:function(newData){
            this.total6 = this.unit_price_6 * newData * (this.rate_6 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_6){
                this.total6 = "";
            }    
        },
        quantity_7:function(newData){
            this.total7 = this.unit_price_7 * newData * (this.rate_7 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_7){
                this.total7 = "";
            }            
        },
        quantity_8:function(newData){
            this.total8 = this.unit_price_8 * newData * (this.rate_8 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_8){
                this.total8 = "";
            }            
        },
        quantity_9:function(newData){
            this.total9 = this.unit_price_9 * newData * (this.rate_9 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_9){
                this.total9 = "";
            }            
        },
        quantity_10:function(newData){
            this.total10 = this.unit_price_10 * newData * (this.rate_10 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_10){
                this.total10 = "";
            }
        },
        quantity_11:function(newData){
            this.total11 = this.unit_price_11 * newData * (this.rate_11 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_11){
                this.total11 = "";
            }
        },
        quantity_12:function(newData){
            this.total12 = this.unit_price_12 * newData * (this.rate_12 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_12){
                this.total12 = "";
            }
        },
        quantity_13:function(newData){
            this.total13 = this.unit_price_13 * newData * (this.rate_13 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_13){
                this.total13 = "";
            }
        },
        quantity_14:function(newData){
            this.total14 = this.unit_price_14 * newData * (this.rate_14 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_14){
                this.total14 = "";
            }
        },
        quantity_15:function(newData){
            this.total15 = this.unit_price_15 * newData * (this.rate_15 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_15){
                this.total15 = "";
            }
        },
        quantity_16:function(newData){
            this.total16 = this.unit_price_16 * newData * (this.rate_16 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_16){
                this.total16 = "";
            }
        },
        quantity_17:function(newData){
            this.total17 = this.unit_price_17 * newData * (this.rate_17 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_17){
                this.total17 = "";
            }
        },
        quantity_18:function(newData){
            this.total18 = this.unit_price_18 * newData * (this.rate_18 /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.quantity_18){
                this.total18 = "";
            }
        },

        rate_1:function(newData,oldData){
            this.total1 = this.unit_price_1 * this.quantity_1 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_1){
                this.total1 = "";
            }

        },
        rate_2:function(newData,oldData){
            this.total2 = this.unit_price_2 * this.quantity_2 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_2){
                this.total2 = "";
            }
        },
        rate_3:function(newData,oldData){
            this.total3 = this.unit_price_3 * this.quantity_3 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_3){
                this.total3 = "";
            }
        },
        rate_4:function(newData,oldData){
            this.total4 = this.unit_price_4 * this.quantity_4 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_4){
                this.total4 = "";
            }
        },
        rate_5:function(newData,oldData){
            this.total5 = this.unit_price_5 * this.quantity_5 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_5){
                this.total5 = "";
            }
        },
        rate_6:function(newData,oldData){
            this.total6 = this.unit_price_6 * this.quantity_6 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_6){
                this.total6 = "";
            }
        },
        rate_7:function(newData,oldData){
            this.total7 = this.unit_price_7 * this.quantity_7 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_7){
                this.total7 = "";
            }
        },
        rate_8:function(newData,oldData){
            this.total8 = this.unit_price_8 * this.quantity_8 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_8){
                this.total8 = "";
            }
        },
        rate_9:function(newData,oldData){
            this.total9 = this.unit_price_9 * this.quantity_9 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_9){
                this.total9 = "";
            }
        },
        rate_10:function(newData,oldData){
            this.total10 = this.unit_price_10 * this.quantity_10 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

            if(!this.rate_10){
                this.total10 = "";
            }
        },
        rate_11:function(newData,oldData){
            this.total11 = this.unit_price_11 * this.quantity_11 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_11){
                this.total11 = "";
            }
        },
        rate_12:function(newData,oldData){
            this.total12 = this.unit_price_12 * this.quantity_12 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_12){
                this.total12 = "";
            }
        },
        rate_13:function(newData,oldData){
            this.total13 = this.unit_price_13 * this.quantity_13 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_13){
                this.total13 = "";
            }
        },
        rate_14:function(newData,oldData){
            this.total14 = this.unit_price_14 * this.quantity_14 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_14){
                this.total14 = "";
            }
        },
        rate_15:function(newData,oldData){
            this.total15 = this.unit_price_15 * this.quantity_15 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_15){
                this.total15 = "";
            }
        },
        rate_16:function(newData,oldData){
            this.total16 = this.unit_price_16 * this.quantity_16 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_16){
                this.total16 = "";
            }
        },
        rate_17:function(newData,oldData){
            this.total17 = this.unit_price_17 * this.quantity_17 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_17){
                this.total17 = "";
            }
        },
        rate_18:function(newData,oldData){
            this.total18 = this.unit_price_18 * this.quantity_18 * (newData /100 + 1);
            let st = (this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18);
            this.subtotal = st;
            let txa = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18) - ((this.unit_price_1 * this.quantity_1) + (this.unit_price_2 * this.quantity_2)+ (this.unit_price_3 * this.quantity_3) + (this.unit_price_4 * this.quantity_4) + (this.unit_price_5 * this.quantity_5) + (this.unit_price_6 * this.quantity_6) + (this.unit_price_7 * this.quantity_7) + (this.unit_price_8 * this.quantity_8) + (this.unit_price_9 * this.quantity_9) + (this.unit_price_10 * this.quantity_10) + (this.unit_price_11 * this.quantity_11) + (this.unit_price_12 * this.quantity_12) + (this.unit_price_13 * this.quantity_13) + (this.unit_price_14 * this.quantity_14) + (this.unit_price_15 * this.quantity_15) + (this.unit_price_16 * this.quantity_16) + (this.unit_price_17 * this.quantity_17) + (this.unit_price_18 * this.quantity_18))
            this.taxamount = txa;
            let ta = (this.total1 + this.total2 + this.total3+ this.total4+ this.total5+ this.total6+ this.total7+ this.total8+ this.total9+ this.total10+ this.total11+ this.total12+ this.total13+ this.total14+ this.total15+ this.total16+ this.total17+ this.total18)
            this.totalamount = ta;

                        
            if(!this.rate_18){
                this.total18 = "";
            }
        },

    }
})
for(let i = 1;i < 19;i++){

    console.log(`vue.content_${i} = content_${i};`)
}

vue.content_1 = content_1;
vue.content_2 = content_2;
vue.content_3 = content_3;
vue.content_4 = content_4;
vue.content_5 = content_5;
vue.content_6 = content_6;
vue.content_7 = content_7;
vue.content_8 = content_8;
vue.content_9 = content_9;
vue.content_10 = content_10;
vue.content_11 = content_11;
vue.content_12 = content_12;
vue.content_13 = content_13;
vue.content_14 = content_14;
vue.content_15 = content_15;
vue.content_16 = content_16;
vue.content_17 = content_17;
vue.content_18 = content_18;

vue.unit_price_1 = unit_price_1;
vue.unit_price_2 = unit_price_2;
vue.unit_price_3 = unit_price_3;
vue.unit_price_4 = unit_price_4;
vue.unit_price_5 = unit_price_5;
vue.unit_price_6 = unit_price_6;
vue.unit_price_7 = unit_price_7;
vue.unit_price_8 = unit_price_8;
vue.unit_price_9 = unit_price_9;
vue.unit_price_10 = unit_price_10;
vue.unit_price_11 = unit_price_11;
vue.unit_price_12 = unit_price_12;
vue.unit_price_13 = unit_price_13;
vue.unit_price_14 = unit_price_14;
vue.unit_price_15 = unit_price_15;
vue.unit_price_16 = unit_price_16;
vue.unit_price_17 = unit_price_17;
vue.unit_price_18 = unit_price_18;

vue.quantity_1 = quantity_1;
vue.quantity_2 = quantity_2;
vue.quantity_3 = quantity_3;
vue.quantity_4 = quantity_4;
vue.quantity_5 = quantity_5;
vue.quantity_6 = quantity_6;
vue.quantity_7 = quantity_7;
vue.quantity_8 = quantity_8;
vue.quantity_9 = quantity_9;
vue.quantity_10 = quantity_10;
vue.quantity_11 = quantity_11;
vue.quantity_12 = quantity_12;
vue.quantity_13 = quantity_13;
vue.quantity_14 = quantity_14;
vue.quantity_15 = quantity_15;
vue.quantity_16 = quantity_16;
vue.quantity_17 = quantity_17;
vue.quantity_18 = quantity_18;

vue.rate_1 = rate_1;
vue.rate_2 = rate_2;
vue.rate_3 = rate_3;
vue.rate_4 = rate_4;
vue.rate_5 = rate_5;
vue.rate_6 = rate_6;
vue.rate_7 = rate_7;
vue.rate_8 = rate_8;
vue.rate_9 = rate_9;
vue.rate_10 = rate_10;
vue.rate_11 = rate_11;
vue.rate_12 = rate_12;
vue.rate_13 = rate_13;
vue.rate_14 = rate_14;
vue.rate_15 = rate_15;
vue.rate_16 = rate_16;
vue.rate_17 = rate_17;
vue.rate_18 = rate_18;