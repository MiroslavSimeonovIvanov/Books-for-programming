/* Напишете програма, която използва масив, за да намери средната стойност
 * на 10 double числа. Използвайте произволни 10 стойности.
 */

using System;

class ArrayFindingAnAverageValue
{
    static void Main()
    {
        // Creating an array with 10 double numbers. 
        double[] nums = new double[10];

        // Declaring a variable sum.
        double sum = 0;

        Console.WriteLine("Please enter the elements of the array: ");
        for (int index = 0; index < nums.Length; index++)
        {
            nums[index] = double.Parse(Console.ReadLine());
            sum = sum + nums[index];
        }

        // Printing the result.
        Console.WriteLine("Average: " + sum / nums.Length);
    }
}
