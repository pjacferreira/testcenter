    /* ************************************************************************
 
 TestCenter Client - Simplified Functional/User Acceptance Testing
 
 Copyright:
 2012-2014 Paulo Ferreira <pf at sourcenotes.org>
 
 License:
 AGPLv3: http://www.gnu.org/licenses/agpl.html
 See the LICENSE file in the project's top-level directory for details.
 
 Authors:
 * Paulo Ferreira
 
 ************************************************************************ */

/* ************************************************************************
 
 ************************************************************************ */

qx.Interface.define("meta.api.entity.IForm", {
  /*
   *****************************************************************************
   MEMBERS
   *****************************************************************************
   */
  members: {
    /**
     * Retrieve Widget Type
     * 
     * @abstract
     * @return {String} Widget Type
     */
    getFormType: function() {
    },
    /**
     * Is this a Read Only Form?
     *
     * @abstract
     * @return {Boolean} 'true' YES, 'false' Otherwise
     */
    isReadOnly: function() {
    },
    /**
     * Returns the Form's Title
     *
     * @abstract
     * @return {String} Form Title
     */
    getTitle: function() {
    }
  }
});
