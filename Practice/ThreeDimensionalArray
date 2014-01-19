/* Напишете програма, която дефинира тримерен масив 3х3х3
 * и го зарежда с числата от 1 до 27.
 */

using System;

class ThreeDimensionalArray
{
    static void Main()
    {
        int[, ,] array3D = new int[3, 3, 3];

        int firstElement = 1;

        for (int row = 0; row < array3D.GetLength(0); row++)
        {
            for (int col = 0; col < array3D.GetLength(1); col++)
            {
                for (int depth = 0; depth < array3D.GetLength(2); depth++)
                {
                    array3D[row, col, depth] = firstElement;
                    firstElement++;
                    Console.Write(array3D[row, col, depth] + " ");                    
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }
    }
}
