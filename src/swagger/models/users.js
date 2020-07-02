/**
 * @swagger
 * components:
 *    schemas:
 *      User:
 *        type: array
 *        required:
 *          - name
 *          - email
 *        items:
 *         properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *         name: ''
 *         email: ''
 */

/**
 * @swagger
 * components:
 *    schemas:
 *      Users:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        items:
 *         properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          id:
 *            type: string
 *            format: uuid
 *            description: Email for the user, needs to be unique.
 *        example:
 *         name: ''
 *         email: ''
 *         id: ''
 */

 /**
 * @swagger
 * components:
 *    schemas:
 *      Courses:
 *        type: object
 *        required:
 *          - name
 *          - author
 *          - authorId
 *        items:
 *         properties:
 *          name:
 *            type: string
 *          author:
 *            type: string
 *          authorId:
 *            type: string
 *        example:
 *         name: ''
 *         author: ''
 *         authorId: ''
 *         tags: ''
 *         createdOn: ''
 */

  /**
 * @swagger
 * components:
 *    schemas:
 *      Modules:
 *        type: object
 *        required:
 *          - name
 *          - courseId
 *          - tags
 *          - tags
 *          - authorId
 *        items:
 *         properties:
 *          name:
 *            type: string
 *          courseId:
 *            type: string
 *          authorId:
 *            type: string
 *          tags:
 *            type: Array
 *        example:
 *         name: ''
 *         courseId: 0
 *         authorId: 0
 *         tags: []
 *         createdOn: ''
 */