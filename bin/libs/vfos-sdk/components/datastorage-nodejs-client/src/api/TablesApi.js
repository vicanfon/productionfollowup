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


let ApiClient = require("../../api_client");
let Error = require('../model/Error');
let ListOfStringAndError = require('../model/ListOfStringAndError');
let TableAlteration = require('../model/TableAlteration');
let TableDefinition = require('../model/TableDefinition');
let TableDefinitionResponseAndError = require('../model/TableDefinitionResponseAndError');

/**
 * Tables service.
 * @module api/TablesApi
 * @version 1.0.0
 */
let TablesApi = function () {


  this.apiClient = ApiClient;

  /**
   * Constructs a new TablesApi. 
   * @alias module:api/TablesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  this.init = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }


  /**
   * Callback function to receive the result of the addTable operation.
   * @callback module:api/TablesApi~addTableCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a new table
   * @param {String} databaseName Database name
   * @param {module:model/TableDefinition} tableDef Table definition
   * @param {String} authorization Http Basic authorization
   * @param {module:api/TablesApi~addTableCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */
  this.addTable = function (databaseName, tableDef, authorization, callback) {
    let postBody = tableDef;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling addTable");
    }

    // verify the required parameter 'tableDef' is set
    if (tableDef === undefined || tableDef === null) {
      throw new Error("Missing the required parameter 'tableDef' when calling addTable");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling addTable");
    }


    let pathParams = {
      'databaseName': databaseName
    };
    let queryParams = {};
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Error;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the alterTable operation.
   * @callback module:api/TablesApi~alterTableCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Alters a table definition in a given relational database.
   * @param {String} databaseName Database name
   * @param {String} tableName Table name
   * @param {module:model/TableAlteration} tableAlterationSchema Schema of the modifications to be made to the table.
   * @param {String} authorization Http Basic authorization
   * @param {module:api/TablesApi~alterTableCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */
  this.alterTable = function (databaseName, tableName, tableAlterationSchema, authorization, callback) {
    let postBody = tableAlterationSchema;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling alterTable");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling alterTable");
    }

    // verify the required parameter 'tableAlterationSchema' is set
    if (tableAlterationSchema === undefined || tableAlterationSchema === null) {
      throw new Error("Missing the required parameter 'tableAlterationSchema' when calling alterTable");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling alterTable");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {};
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = Error;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the describeTable operation.
   * @callback module:api/TablesApi~describeTableCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TableDefinitionResponseAndError} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Gets a description of a table of a given relational database
   * @param {String} databaseName Database name
   * @param {String} tableName Table name
   * @param {String} authorization Http Basic authorization
   * @param {module:api/TablesApi~describeTableCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TableDefinitionResponseAndError}
   */
  this.describeTable = function (databaseName, tableName, authorization, callback) {
    let postBody = null;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling describeTable");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling describeTable");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling describeTable");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {};
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = TableDefinitionResponseAndError;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the dropTable operation.
   * @callback module:api/TablesApi~dropTableCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Drops an existing relational table
   * @param {String} databaseName Database name
   * @param {String} tableName Table name
   * @param {String} authorization Http Basic authorization
   * @param {module:api/TablesApi~dropTableCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */
  this.dropTable = function (databaseName, tableName, authorization, callback) {
    let postBody = null;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling dropTable");
    }

    // verify the required parameter 'tableName' is set
    if (tableName === undefined || tableName === null) {
      throw new Error("Missing the required parameter 'tableName' when calling dropTable");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling dropTable");
    }


    let pathParams = {
      'databaseName': databaseName,
      'tableName': tableName
    };
    let queryParams = {};
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Error;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables/{tableName}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the listTables operation.
   * @callback module:api/TablesApi~listTablesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ListOfStringAndError} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Gets the list of tables of a given relational database
   * @param {String} databaseName Database name
   * @param {String} authorization Http Basic authorization
   * @param {module:api/TablesApi~listTablesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ListOfStringAndError}
   */
  this.listTables = function (databaseName, authorization, callback) {
    let postBody = null;

    // verify the required parameter 'databaseName' is set
    if (databaseName === undefined || databaseName === null) {
      throw new Error("Missing the required parameter 'databaseName' when calling listTables");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling listTables");
    }


    let pathParams = {
      'databaseName': databaseName
    };
    let queryParams = {};
    let headerParams = {
      'Authorization': authorization
    };
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ListOfStringAndError;

    return this.apiClient.callApi(
      '/databases/{databaseName}/tables', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }


}


module.exports = new TablesApi();