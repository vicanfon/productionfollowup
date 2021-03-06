/**
 * vf-OS relational storage service
 * This is the vf-OS service for storing relational data. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: osaiz@ikerlan.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */



let ApiClient = require('../../api_client.js');
let MyRecordset = require('./MyRecordset');





/**
 * The ListOfRowsAndError model module.
 * @module model/ListOfRowsAndError
 * @version 1.0.0
 */
let ListOfRowsAndError = function () {


    /**
     * Constructs a <code>ListOfRowsAndError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOfRowsAndError} obj Optional instance to populate.
     * @return {module:model/ListOfRowsAndError} The populated <code>ListOfRowsAndError</code> instance.
     */
    this.constructFromObject = function (data, obj) {
        if (data) {
            obj = obj || new ListOfRowsAndError();





            if (data.hasOwnProperty('list_of_rows')) {
                obj['list_of_rows'] = MyRecordset.constructFromObject(data['list_of_rows']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * @member {module:model/MyRecordset} list_of_rows
     */
    this.list_of_rows = undefined;
    /**
     * @member {module:model/Error} error
     */
    this.error = undefined;

}

module.exports = new ListOfRowsAndError();